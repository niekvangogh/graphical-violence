const io = require("socket.io")();
io.on("connection", (client) => {
  console.log("NEW CONNECTION: " + client.id);
  client.on("submit_video", (event) => {
    console.log(event);
    io.emit("play_video", event);
  });
});

io.listen(3000);
