const http = require("http");
const port = 4001;

http.createServer((req, res) => {
    function printBody(){
        res.writeHead(200, {"content-type":"text/plain;charset=utf-8"});
        res.end(JSON.stringify({
            url:req.url,
            method:req.method,
            headers:req.headers
        }))        
    }

    switch(req.url){
        case "/redirect":
            res.writeHead(301, {Location:"/"});
            res.end();
        break;
        case "/print/body":
            req.setEncoding("utf8");
            var body = "";
            req.on("data", (d) => {
                body += d;
            })
            req.on("end", () => {
                res.end(JSON.stringify(body));
            })
        break;
        default:
            printBody();
        break;
    }
}).listen(port);