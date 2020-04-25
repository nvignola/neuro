// server.js
var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);

app.use(express.static(__dirname + "/dist"));
//redirect / to our index.html file
app.get("/", function (req, res, next) {
  res.sendFile(__dirname + "/dist/index/index.html");
});

app.get("/monitor", function (req, res, next) {
  res.sendFile(__dirname + "/dist/monitor/monitor.html");
});

io.on("connection", function (client) {
  client.on("elementSelection", function (data) {
    io.emit("selectionUpdate", data);
  });
});

//start our web server and socket.io server listening
server.listen(3000, function () {
  console.log("listening on *:3000");
});
