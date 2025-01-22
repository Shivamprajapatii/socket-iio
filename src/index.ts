import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8080});

wss.on("connection", function(socket) {
    console.log("User Connnected!");

    setInterval(() =>{
        socket.send("current prise of solana" +Math.random())
    }, 500);

    socket.on("message", (e) =>{
        console.log(e.toString());
    });
});

