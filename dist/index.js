"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on("connection", function (socket) {
    console.log("User Connnected!");
    setInterval(() => {
        socket.send("current prise of solana" + Math.random());
    }, 500);
    socket.on("message", (e) => {
        console.log(e.toString());
    });
});
