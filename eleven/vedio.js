const http = require("http");
const path = require("path");
const fs = require("fs");

http.createServer((req, res) => {
    res.writeHead(200, {
        "content-type":"application/pdf"
    });
    let stream = fs.createReadStream("../node.js.pdf");
    stream.pipe(res);
}).listen(4001);