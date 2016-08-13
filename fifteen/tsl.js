const tls = require("tls");
const fs = require("fs");

const serverOptions = {
    key:fs.readFileSync("./my_key.pem"),
    cert:fs.readFileSync("./my_cert.pem")
};

//端口号
const port = 4001;

//创建服务器
const server = tls.createServer(serverOptions);
/**
 * 除了能够接收key和cert之外，还可以有两外两个基本的选项
 * requestCert:如果设置为true，服务器就会请求连接到其上的客户端证书
 * ，并且尝试对证书进行验证。默认是false
 * 
 * rejectUnauthorized:如果为true，服务器会使用一个认证中心的列表来拒绝任何
 * 未经授权的连接，该项是由在requestCert为true的时候才起作用。默认是false 
 */

//监听事件
server.on("secureConnection", (stream) => {
    console.log("got a new connection");
    //监听data事件，获取客户端尚未加密的数据
    stream.on("data", (data) => {
        console.log(`got the data from the client : ${data}`);
    })
    stream.write("hello");
})


//绑定端口号
server.listen(port);