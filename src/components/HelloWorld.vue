<template>
 <div class="dash">
  <div class="dashboard-left-menu">
    <div class="sidebar">
      <div class="admin">
        <img src="../../public/assets/images/avatar.png" class="avatar-img" alt="avatar">
        <div class="username">
          username
        </div>
        <div class="email">
          username@leapbit.com
        </div>
      </div>
      <div class="navigation">
        <div class="nav-item">
          <img src="../../public/assets/images/icon-home.svg" alt="icon-home">
          <p>Dashboard</p>
        </div>
        <div class="nav-item">
          <img src="../../public/assets/images/icon-chat.svg" alt="icon-chat">
          <p>Chats</p>
        </div>
        <div class="nav-item">
          <img src="../../public/assets/images/icon-users.svg" alt="icon-users">
          <p>Users</p>
        </div>
        <div class="nav-item">
          <img src="../../public/assets/images/icon-settings.svg" alt="icon-settings">
          <p>Settings</p>
        </div>
      </div>
      <div class="bottom-nav">
        <div class="nav-item">
          <img src="../../public/assets/images/icon-logout.svg" alt="icon-logout">
          <p>Logout</p>
        </div>
      </div>
    </div>
  </div>
  <div class="right-col">
    <div class="messages">
      Messages <span class="rectangle"><span class="-new">2 new</span></span>
    </div>
    <div class="msg-row">
      <div class="chats-list">
        <div class="chats-top">
          <div class="search-pack">
            <div class="search-pack-left">
              <span class="search-label">Search for chat</span> <input class="search-box" type="text" placeholder="Search">
            </div>
          </div>
          <div class="active-box">
            <span class="status-label">Status</span>
            <div class="status-box">
              <span class="status-icon"></span>
              <span class="status-placeholder">Active</span> <!-- <img src="../../public/assets/images/icon-chevron.svg" class="status-chevron"></img> -->
            </div>
          </div>
        </div>
        <div class="status-divider"></div>
        <div class="scrollable-messages">
          <div class="message-box">
            <div class="">
              <div class="chat-sender">
                <span class="profile-bg"><span class="profile-initials">SG <span class="notif-bg">2</span></span></span>
                <div class="sender-details">
                  <div class="profile-name">
                    Sara Gonzalez <span class="message-timestamp">July 10, 2022 | 10:21</span>
                  </div><span class="profile-email">sara.gonzalez@leapbit.com</span>
                </div>
              </div>
            </div>
            <div class="chat-bottom">
              <p class="message-text">Donec ultrices hendrerit orci, nec ultricies mauris. Phasellus tincidunt ac nunc et posuere. Sed malesuada quis massa non…</p>
            </div>
          </div>
          <div class="message-box">
            <div class="">
              <div class="chat-sender">
                <span class="profile-bg"><span class="profile-initials">AW</span></span>
                <div class="sender-details">
                  <div class="profile-name">
                    Austin Wade <span class="message-timestamp">July 10, 2022 | 08:45</span>
                  </div><span class="profile-email">austin.wade@leapbit.com</span>
                </div>
              </div>
            </div>
            <div class="chat-bottom">
              <p class="message-text">Vivamus vel gravida urna, in hendrerit est. Nunc suscipit lectus eget nibh convallis malesuada. Fusce ultrices ultricies pulvinar…</p>
            </div>
          </div>
          <div class="message-box">
            <div class="">
              <div class="chat-sender">
                <span class="profile-bg"><span class="profile-initials">AD</span></span>
                <div class="sender-details">
                  <div class="profile-name">
                    Albert Dera <span class="message-timestamp">July 9, 2022 | 08:45</span>
                  </div><span class="profile-email">albert.dera@leapbit.com</span>
                </div>
              </div>
            </div>
            <div class="chat-bottom">
              <p class="message-text">Vivamus vel gravida urna, in hendrerit est. Nunc suscipit lectus eget nibh convallis malesuada. Fusce ultrices ultricies pulvinar…</p>
            </div>
          </div>
          <div class="message-box">
            <div class="">
              <div class="chat-sender">
                <span class="profile-bg"><span class="profile-initials">ML</span></span>
                <div class="sender-details">
                  <div class="profile-name">
                    Maria Liverani <span class="message-timestamp">July 6, 2022 | 08:45</span>
                  </div><span class="profile-email">maria.liverani@leapbit.com</span>
                </div>
              </div>
            </div>
            <div class="chat-bottom">
              <p class="message-text">Vivamus vel gravida urna, in hendrerit est. Nunc suscipit lectus eget nibh convallis malesuada. Fusce ultrices ultricies pulvinar…</p>
            </div>
          </div>
          <div class="message-box">
            <div class="">
              <div class="chat-sender">
                <span class="profile-bg"><span class="profile-initials">SG <span class="notif-bg">2</span></span></span>
                <div class="sender-details">
                  <div class="profile-name">
                    Sara Gonzalez <span class="message-timestamp">July 10, 2022 | 10:21</span>
                  </div><span class="profile-email">sara.gonzalez@leapbit.com</span>
                </div>
              </div>
            </div>
            <div class="chat-bottom">
              <p class="message-text">Donec ultrices hendrerit orci, nec ultricies mauris. Phasellus tincidunt ac nunc et posuere. Sed malesuada quis massa non…</p>
            </div>
          </div>
          <div class="message-box">
            <div class="">
              <div class="chat-sender">
                <span class="profile-bg"><span class="profile-initials">AW</span></span>
                <div class="sender-details">
                  <div class="profile-name">
                    Austin Wade <span class="message-timestamp">July 10, 2022 | 08:45</span>
                  </div><span class="profile-email">austin.wade@leapbit.com</span>
                </div>
              </div>
            </div>
            <div class="chat-bottom">
              <p class="message-text">Vivamus vel gravida urna, in hendrerit est. Nunc suscipit lectus eget nibh convallis malesuada. Fusce ultrices ultricies pulvinar…</p>
            </div>
          </div>
          <div class="message-box">
            <div class="">
              <div class="chat-sender">
                <span class="profile-bg"><span class="profile-initials">AD</span></span>
                <div class="sender-details">
                  <div class="profile-name">
                    Albert Dera <span class="message-timestamp">July 9, 2022 | 08:45</span>
                  </div><span class="profile-email">albert.dera@leapbit.com</span>
                </div>
              </div>
            </div>
            <div class="chat-bottom">
              <p class="message-text">Vivamus vel gravida urna, in hendrerit est. Nunc suscipit lectus eget nibh convallis malesuada. Fusce ultrices ultricies pulvinar…</p>
            </div>
          </div>
          <div class="message-box">
            <div class="">
              <div class="chat-sender">
                <span class="profile-bg"><span class="profile-initials">ML</span></span>
                <div class="sender-details">
                  <div class="profile-name">
                    Maria Liverani <span class="message-timestamp">July 6, 2022 | 08:45</span>
                  </div><span class="profile-email">maria.liverani@leapbit.com</span>
                </div>
              </div>
            </div>
            <div class="chat-bottom">
              <p class="message-text">Vivamus vel gravida urna, in hendrerit est. Nunc suscipit lectus eget nibh convallis malesuada. Fusce ultrices ultricies pulvinar…</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mask-cbox">
        <div class="chat-header">
          <div class="chat-header-contents">
            <div class="user-circle">
              <span class="user-initials">AW</span>
            </div>
            <div class="chat-header-info">
              <span class="chat-header-uname">Austin Wade</span> <span class="header-usermail">austin.wade@leapbit.com</span>
            </div>
          </div>
        </div>
        <div class="chat-body">
          <div class="chat-body-client">
            <div class="user-circle">
              <span class="user-initials">AW</span>
            </div>
            <div class="chat-body-msg">
              <p class="chat-body-rectangle remove-marg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum ratione sapiente error harum reiciendis iusto ullam, rerum, magni, vel excepturi commodi officiis facilis pariatur asperiores delectus dignissimos dicta laborum magnam repellendus possimus facere autem. Porro, praesentium adipisci? Inventore natus, labore sequi magnam doloribus saepe obcaecati delectus ad aliquid. Non, facere.</p><span class="chat-body-timestamp">July 10, 2022 | 10:10</span>
            </div>
          </div>
          <div class="chat-body-user">
            <div class="chat-user-logo"><img src="../../public/assets/images/avatar.webp" alt="company logo" class="chat-body-logo"></div>
            <div class="chat-body-msg-user">
              <p class="chat-body-rectangle-user remove-marg">Ut vel odio sed dui tempor viverra eget in felis. Cras blandit lectus ex. Donec non sollicitudin ante. Nullam vitae leo a nulla gravida placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><span class="chat-body-timestamp user-timestamp">July 10, 2022 | 10:10</span>
            </div>
          </div><!--GRANICA-->
        </div>
        <div class="send-msg">
          <form action="post" class="chat-entry">
            <input type="text" class="chat-entry-text" placeholder="Upišite svoju poruku..."> <input type="image" name="submit" src="..//public/assets/images/icon-send.svg" class="chat-send-icon" alt="send message">
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 @import "../../public/sass/index.scss";
</style>
