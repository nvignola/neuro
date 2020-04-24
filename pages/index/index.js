import io from "socket.io-client";

const socket = io.connect();
const table = document.querySelector("table");

table.addEventListener("click", function (event) {
  socket.emit("elementSelection", { x: event.x, y: event.y });
  event.target.classList.add("selected");
});

function buttonClicked() {
  socket.emit("clicked");
}
