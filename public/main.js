const socket = io();
let userName = `Anon${Math.floor(Math.random() * 1000000)}`;

const inboxPeople = document.querySelector(".inbox__people");
const inputField = document.querySelector(".message_form__input");
const messageForm = document.querySelector(".message_form");
const messageBox = document.querySelector(".messages__history");
const fallback = document.querySelector(".fallback");
const closeIcon = document.querySelector(".chat-title-bar-close");
const chatWrapper = document.querySelector("#chat-wrapper");
const openIcon = document.querySelector(".header-chat-icon");
const imageSource = document.querySelector("#image-source-for-chat");
const avatarImage = imageSource.firstChild.currentSrc;
const userSource = document.querySelector("#username-source");
if (userSource)
  userName = userSource.textContent.substring(8, userSource.length);

const hideChat = () => {
  chatWrapper.classList.remove("chat--visible");
};

const showChat = () => {
  chatWrapper.classList.add("chat--visible");
  chatField.focus();
};

openIcon.addEventListener("click", () => showChat());
closeIcon.addEventListener("click", () => hideChat());

const newUserConnected = (user) => {
  // userName = user || `User${Math.floor(Math.random() * 1000000)}`;
  socket.emit("new user", userName);
  addToUsersBox(userName);
};

const addToUsersBox = (userName) => {
  if (!!document.querySelector(`.${userName}-userlist`)) {
    return;
  }

  const userBox = `
    <div class="chat_ib ${userName}-userlist">
      ${userName}
    </div>
  `;
  inboxPeople.innerHTML += userBox;
};

const addNewMessage = ({ user, message }) => {
  const time = new Date();
  const formattedTime = time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });

  // const receivedMsg = `
  // <div class="incoming__message">
  //   <p style="text-align:left;">${message}</p>
  //    <img class="chat-avatar avatar-tiny" src="${avatarImage}">
  //   <p style="text-align:right; color:#03dac5">${user} |
  //   ${formattedTime}</p>
  // </div>`;

  // const myMsg = `
  // <div class="outgoing__message">
  //   <p style="text-align:left;">${message}</p>
  //   <p style="text-align:right;color:#03dac5">${formattedTime}</p>
  // </div>`;

  const receivedMsg1 = `
  <div class="outgoing__message">
    <div>${message}</div>
    <div class="outgoing__message">
      <div>
        <img class="chat-avatar avatar-tiny" src="${avatarImage}">
      </div>
      <div>
        <p style="color:#03dac5">${user} | 
      ${formattedTime}</div>
    </div>
  </div>`;

  const myMsg1 = `
  <div class="outgoing__message">
    <div>${message}</div>
    <div class="outgoing__message">
      <div>
        <img class="chat-avatar avatar-tiny" src="${avatarImage}">
      </div>
      <div>
        <p style="color:#03dac5">You | 
      ${formattedTime}</div>
    </div>
  </div>`;

  messageBox.innerHTML += user === userName ? myMsg1 : receivedMsg1;
};

// new user is created so we generate nickname and emit event
newUserConnected();

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!inputField.value) {
    return;
  }

  socket.emit("chat message", {
    message: inputField.value,
    nick: userName,
  });

  inputField.value = "";
});

inputField.addEventListener("keyup", () => {
  socket.emit("typing", {
    isTyping: inputField.value.length > 0,
    nick: userName,
  });
});

socket.on("new user", function (data) {
  data.map((user) => addToUsersBox(user));
});

socket.on("user disconnected", function (userName) {
  document.querySelector(`.${userName}-userlist`).remove();
});

socket.on("chat message", function (data) {
  addNewMessage({ user: data.nick, message: data.message });
});

socket.on("typing", function (data) {
  const { isTyping, nick } = data;

  if (!isTyping) {
    fallback.innerHTML = "";
    return;
  }

  fallback.innerHTML = `<p>${nick} is typing...</p>`;
});
