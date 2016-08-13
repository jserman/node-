const http = require("http");

http.createServer((req, res) => {
    // res.writeHead(200, {
    //     "content-type":"text/plain;charset='utf-8'",
    //     "cache-control":"max-age=3600"
    // })
    res.setHeader("content-type","text/plain;charset='utf-8'");
    res.writeHead(200, {"cache-control":"max-age=3600"});
    res.end("响应结束");
}).listen(4001);