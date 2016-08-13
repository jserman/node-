const net = require("net");
const port = 4001;
const ws = require("fs").createWriteStream("data.txt");
const server = net.createServer((socket) => {
    console.log("you are listening on 4001");

    //设置输出的字符编码
    socket.setEncoding("utf8");
    //向客户端写入数据
    socket.write("connected!! if you want to stop , please type quit");
    //监听输入的数据
    socket.on("data", (data) => {
        console.log(`got the data ${data.toString()}`);
        if(data.toString().trim().toLowerCase() == "quit"){
            socket.write("bye bye");
            //关闭连接
            socket.end();
            //关闭服务器
            return server.close();
        }
        //不是的话，就直接输出
        socket.write(data.toString());
        //同时写入data.txt文件
        socket.pipe(ws,{end:false}); //?为什么会输入很多次
    })

    socket.on("end", () => {
        //监听end事件
        console.log("game over");
    })
}).listen(port);

server.on("listening", () => {
    console.log(`you are listening on ${port}`);
})
