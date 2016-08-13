const net = require("net");

net.createServer((socket) => {
    //创建一个新的连接
    socket.on("data", (data) => {
        //获取数据
        console.log(data.toString());
    })

    //监听关闭链接的事件
    socket.on("end", (data) => {
        console.log(`end ${data.toString()}`);
    })
    //写数据
    scoket.write("this is the data");
}).listen(4001);//绑定监听的端口