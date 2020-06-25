const io = require("socket.io")();
io.on("connection", (client) => {
  console.log("NEW CONNECTION: " + client.id);
  client.on("submit_video", (event) => {
    console.log(event);
    io.emit("play_video", event);
  });

  client.on("play_video", (event) => {
    console.log(event);
    io.emit("play_video", {
      id: event.id,
    });
  });
});

io.listen(3000);
