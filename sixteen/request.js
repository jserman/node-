const https = require("https");
const port = 4001;

//指定创建请求的几个基本的选项
const options = {
    host:"www.baidu.com",
    method:"GET"
};
//创建请求
const request = https.request(options, (res) => {
    console.log("请求已经建立");
    console.log(res.statusCode);
    res.on("data", (data) => {
        // console.log(data.toString());
    })
    console.log(res.socket.getPeerCertificate());
});
request.write("hello world");
request.end();