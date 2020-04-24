import io from "socket.io-client";
const socket = io.connect();

//when we receive numClients, do this
socket.on("selectionUpdate", function ({ x, y }) {
  const span = document.createElement("span");
  span.style.cssText = `position: absolute; top: ${y - 15}px; left: ${
    x - 15
  }px`;
  span.classList.add("marker");

  document.body.appendChild(span);
});
