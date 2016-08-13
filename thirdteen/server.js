const http = require("http");
const fs = require("fs");
const port = 4001;

//创建一个服务器
http.createServer((req, res) => {
    res.writeHead(200, {"content-type":"text/plain;charset='utf-8'"});
    var stream = fs.createReadStream("./note.md");
    stream.pipe(res);
    stream.on("end", () => {
        console.log("响应结束");
        res.end();
    })
}).listen(port);