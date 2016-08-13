const http = require("http");
const child_process = require("child_process");
const spawn = child_process.spawn;

var server = http.createServer((req, res) => {
    res.writeHead(200, {
        "content-type":"text/plain"
    })

    var str = spawn("ls",["./"]);
    str.stdout.pipe(res);
    res.on("end", ()=>{
        str.kill();
        server.close();
    })
}).listen(4001);
