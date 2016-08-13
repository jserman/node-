var fs = require("fs");
fs.readFile("./test.txt", (err, fileContent)=>{
    if(err){
        throw new Error(err);
    }
    console.log(fileContent.toString());
});

//上面的编程模式是nodejs程序非常普遍的编程方式--异步函数驱动的方式。这种回调函数的第一个参数通常是一个表示错误的对象，后面的函数才具有各自特定的含意
