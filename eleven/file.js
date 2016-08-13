//这个例子将创建一个静态的文件服务器，文件的路劲主要通过url来提供
const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer((req, res) => {
    //获取文件的绝对路径
    var filepath = path.normalize(`.${req.url}`);
    console.log(`is servering the file ${filepath}`);

    fs.exists(filepath, (exists) => {
        if(exists){
            fs.stat(filepath, (err, stats) => {
                if(err){
                    throw new Error(`${filepath}所指的文件不存在`);
                }
                var stream;
                if(stats.isDirectory()){
                    res.writeHead(500,{
                        "content-type":"text/plain;charset='utf-8'"
                    });
                    res.end("服务器出错或者你没有权限访问");
                }else{
                    stream = fs.createReadStream(filepath);
                    res.writeHead(200, {
                        "content-type":"text/plain; charset='utf-8'"
                    })
                    stream.pipe(res);
                    stream.on("error", ()=>{
                        console.log("the error happening");
                    })
                    stream.on("end", () => {
                        console.log("读取成功");
                        res.end();
                    })
                }
            })    
        }else{
            res.writeHead(404, {
                "content-type":"text/plain;charset='utf-8'"
            })
            res.end("你访问的文件不存在");
        }
    })

}).listen(4001)