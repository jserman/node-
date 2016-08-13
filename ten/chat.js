const net = require("net");
const server = net.createServer();
const port = 4001;


/**
 * 创建聊天室的一个关键点就是，我们消炎药聚合所有的客户端。也就是我们需要
 * 把所有已经连接上的socket保存在一个数组里面，这样我们就能聚合所有的客户端了 
 * */

const sockets = [];  //聚合所有的客户端

//进行listening事件的监听
server.on("listening", () => {
    console.log(`the server is listening on ${port}`);
})
//进行error事件的监听
server.on("error", (err) => {
    console.log(`the error happening with ${err.message}`);
})
//进行clsoe事件的监听
server.on("close", () => {
    console.log(`you closed the server`);
})

//监听connection事件
server.on("connection", (socket) =>{
    console.log(`the server connected and the port is ${port}`);
    //聚合客户端
    sockets.push(socket);
    //通过监听data事件，监听客户端的数据
    socket.on("data", (data) => {
        console.log(`got the data: ${data}`);
        //第二个关键点就是，在收到data事件的时候，需要把信息广发给
        //其它的客户端
        for(var s of sockets){
            if(socket !== s){
                s.write(`got the other message : ${data}`);
            }
        }
    })
    //删除并关闭连接
    socket.on("close", () => {
        console.log("the connection is connected");
        let index = sockets.indexOf(socket);
        sockets.splice(index, 1);
    })
})

//监听指定的端口
server.listen(port);