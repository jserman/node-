const http = require("http");
const util = require("util");
const server = http.createServer();
const port = 4001;

//监听request事件
server.on("request", (req, res) => {
    res.writeHead(200, {"content-type":"text/plain"});
    res.write(req.method);
    // res.write(JSON.stringify(req.headers, 4));
    res.write(util.inspect(req.headers));
    req.on("data", (data) => {
        console.log(data.toString());
    })
    res.end(req.url);
})

server.listen(port);