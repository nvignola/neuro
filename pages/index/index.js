import io from "socket.io-client";

const socket = io.connect();
const table = document.querySelector("table");

table.addEventListener("click", function (event) {
  socket.emit("elementSelection", { id: event.target.id });
  event.target.classList.add("selected");
});

function buttonClicked() {
  socket.emit("clicked");
}
