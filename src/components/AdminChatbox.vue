<template>
  <div class="mask-cbox">
    <div class="empty-msg" v-if="!conv_id">Open a chat to start.</div>
    <AdminTopBar :full_name="full_name" :email="email" v-if="conv_id" />
    <div class="chat-body" ref="chatBody">
      <AdminMessage
        v-for="message in admin_chat.messages"
        :key="message.conversation_id"
        :messageData="message"
        :full_name="admin_chat.full_name"
      />
    </div>
    <AdminInput @sendingMessage="sendingMessage" v-if="conv_id" />
  </div>
</template>

<script>
import AdminTopBar from "./AdminTopBar.vue";
import AdminMessage from "./AdminMessage.vue";
import AdminInput from "./AdminInput.vue";
import moment from "moment";

export default {
  name: "AdminChatbox",
  props: ["conv_id"],
  components: {
    AdminTopBar,
    AdminMessage,
    AdminInput,
  },
  data() {
    return {
      admin_chat: {},
      full_name: "",
      email: "",
    };
  },
  watch: {
    conv_id(newConv_id) {
      this.axios
        .get(process.env.VUE_APP_SERVER + "conversation/" + newConv_id)
        .then((res) => {
          this.admin_chat = res.data;
          this.full_name = res.data.full_name;
          this.email = res.data.email;
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.$socket.client.on("confirmToClient", (confirmedMsg) => {
      if (confirmedMsg.conversation_id == this.conv_id) {
        this.admin_chat.messages.push(confirmedMsg.values.$push.messages);
      }
    });
  },
  updated() {
    this.$refs.chatBody.scrollTop = this.$refs.chatBody.scrollHeight;
  },
  methods: {
    sendingMessage(messageText) {
      if (!this.conv_id) return;
      const msg = {
        admin: true,
        message: messageText,
        timestamp: moment().format("MMMM Do YYYY, HH:mm:ss "),
      };
      const values = {
        $set: {
          last_updated: moment().unix(),
        },
        $push: {
          messages: msg,
        },
      };

      const packet = {
        conversation_id: this.conv_id,
        values: values,
      };

      this.$socket.client.emit("messageSent", packet);
    },
  },
};
</script>
