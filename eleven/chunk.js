require("http").createServer((req, res) => {
    res.writeHead(200, {
        "content-type":"text/plain; charset=utf-8"
    })

    var left = 10;
    var timer = setInterval(()=>{
        for(var i=0; i<100; i++){
            res.write(Date.now() + "  ");
        }

        if(--left === 0){
            clearInterval(timer);
            res.end("time over");
        }
    },1000);
}).listen(4001);