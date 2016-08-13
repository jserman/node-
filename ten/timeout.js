const net = require("net");
const port = 4001;
const server = net.createServer();

//定义listen事件
server.on("listening", () => {
    console.log(`你的服务器正在监听${port}`);
})

//定义connection事件
server.on("connection", (socket) => {
    socket.setEncoding("utf8");
    //参数就是套接字对象
    socket.write("连接成功");
    socket.write("if you want to stop please type quit");
    //监听data事件
    socket.on("data", (data) => {
        //这里的data就是数据
        if(data.toString().trim().toLowerCase() === "quit"){
            socket.end();
            //关闭服务器
            return server.close();
        } 
        console.log(data.toString());       
    })

    //设置超时时间
    socket.setTimeout(180);
    //监听超时事件
    socket.on("timeout", () => {
        socket.end("已超时，并断开链接");
    })
})

//定义close事件
server.on("close", () => {
    console.log("you closed the server");
})

//定义error事件
server.on("error", () => {
    console.log("the error happending");
})

//监听
server.listen(port);