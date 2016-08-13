const server = require("net").createServer();
const port = 4001;

//监听listening事件
server.on("listening", () => {
    console.log(`the server is listening on ${port}`);
})

//监听connection事件
server.on("connection", (socket) => {
    console.log("server is connected");
    //连接后立马断开
    socket.end();
    //同时关闭服务器
    server.close();
})

//监听close事件
server.on("close", () => {
    console.log("server is closed");
})

//监听error事件
server.on("error", () => {
    console.log("the server erroring");
})

//绑定端口
server.listen(port);