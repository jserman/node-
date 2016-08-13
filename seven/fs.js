const fs = require("fs");
const path = require("path");

// fs.stat(path.resolve("./","project/nodejs/nodejs-professional/seven/note.md"), (err, stats) => {
//     if(err){
//         throw new Error(err);
//     }
//     console.log(JSON.stringify(stats,"--"));
//     console.log(stats.isFile());
//     console.log(stats.isDirectory())
//     console.log(stats.isBlockDevice())
// });

// fs.open(path.resolve("./","project/nodejs/nodejs-professional/seven/text.txt"), "r", (err,content) => {
//     var contentBuffer = new Buffer(20),
//         bufferStart = 0,
//         contentLength = contentBuffer.length;
//         contentPosition = 5;
//     if(err) throw new Error(err);

//     fs.read(content, contentBuffer, bufferStart, contentLength, contentPosition, (err, bytes) => {
//         if (err) throw new Error(`读取内容的时候出错了${bytes}`);
//         if(bytes){
//             console.log(`读取了${bytes}字节的内容，内容是${contentBuffer.toString()}`);
//         }
//     }) 
// });


fs.open(path.resolve("./","project/nodejs/nodejs-professional/seven/text.txt"), "w", (err,fd) => {
    var content = new Buffer("hello everyone i come from the method"),
        start = 0,
        length = 10,
        fileStart = 0;
    if (err) throw new Error(err);
    fs.write(fd, "hello everyone i come from the method" ,start, length, fileStart, (err,written)=>{
        if(err) throw new Error(err);
        console.log(`写入文件成功，写了${written}字节长度的内容`);
    })
})
