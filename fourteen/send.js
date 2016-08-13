const drgam = require("dgram");
const server = drgam.createSocket("udp4");
const port = 4001;

//设置监听事件
server.on("listening", () => {
    console.log("服务器监听4001");
})

//设置message事件
server.on("message", (message, info) => {
    var msg = new Buffer("服务端已接受到消息");
    console.log(`服务器接受${info.address}:${info.port}的消息:${message}`);
    server.send(msg,0,msg.length,info.port,info.address,()=>{
        console.log("success");
    });
})

//监听指定的端口号
server.bind(port);