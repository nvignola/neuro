import io from "socket.io-client";
const socket = io.connect();

//when we receive numClients, do this
socket.on("selectionUpdate", function ({ id }) {
  const selected = document.querySelector(`#${id}`);
  selected.classList.add("selected");
});
