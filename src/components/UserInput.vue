<template>
  <form @submit.prevent="sendMessage()" class="user_chat_entry">
    <input
      v-model="message"
      type="text"
      class="user_chat_entry_text"
      placeholder="Enter you message..."
    />
    <input
      type="image"
      class="user_chat_entry_image"
      name="submit"
      :src="require('../../public/assets/images/icon-send.svg')"
      alt="send"
      :style="sendBtnOpacity"
    />
  </form>
</template>

<script>
export default {
  name: "UserInput",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    sendMessage() {
      if (!this.message) return;
      this.$emit("submit-msg", this.message);
      this.message = "";
    },
  },
  computed: {
    sendBtnOpacity() {
      if (this.message) return "opacity: 1";
      else return "opacity: 0.5";
    },
  },
};
</script>
