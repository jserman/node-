const dgram = require("dgram");
const port = 4001;
//创建服务器
const server = dgram.createSocket("udp4");

//监听消息
server.on("message", (message,info) => {
    console.log(`收到新的消息${message}`);
    console.log(`这是我的发送端的信息，请你验证：${info.address},${info.port}.${JSON.stringify(info)}`);
})

server.on("listening", () => {
    var address = server.address();
    console.log(`服务器已经连接，${address.address},${address.port}`);
})

server.on("error", (err) => {
    console.log(`出错了，${err.message}`);
})

server.bind(port);