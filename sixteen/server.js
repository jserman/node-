const https = require("https");
const fs = require("fs");

//创建服务器创建的时候的一些配置选项
const option = {
    key:fs.readFileSync("./server_key.pem"),
    cert:fs.readFileSync("./server_cert.pem"),
    requestCert:true,
    rejectUnauthorized:false
}

//监听的端口号
const port = 4001;

//开始创建服务器--同时设置监听，这个时候我们主要使用的listen这个方法设置我们需要监听的端口
const server = https.createServer(option, (req, res) => {
    console.log(req.socket.authorized);
    res.writeHead(200, {"content-type":"text/plain;charset=utf-8"});
    res.end("https服务器创建成功");
});

//这个方法是异步的，我们可以为其提供一个回调函数
server.listen(port, () => {
    console.log(`the server is listening on ${port}`);
});

/**
 * 从上面的整个建立过程，我们可以看出，我们在创建https服务器的时候，相对于
 * 创建http服务器而言。多了一个添加证书的步骤。同时createServer也会多一个配置选项
 */




