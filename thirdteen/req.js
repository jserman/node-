const http = require("http");
const option = {
    host:"www.baidu.com",
    method:"GET"
};
const server = http.request(option,(res) => {
    console.log(res.statusCode);
});

server.write("请求正在开始");
server.end();

//绑定响应事件
server.on("response", (res) => {
    console.log("接受到了响应");
    console.log(res.headers);
})