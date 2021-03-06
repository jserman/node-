const http = require("http");
const server = http.createServer();

//监听request(请求)事件
server.on("request",(req, res) => {
    //这个事件的回调函数接收两个参数，第一个参数就是
    //请求，第二个参数就是响应

    //设置响应的信息
    //设置响应头
    res.writeHead(200, {"content-type":"text/plain"});
    //设置响应的信息
    res.write("hello world");
    //终止响应
    res.end();
})

//监听指定的端口号
server.listen(4001);

/**
 * 关于上述代码的整体解释
 * 
 * 第一行：引入创建web的模块，http模块
 * 第二行：通过http模块的createServer()方法，来创建一个本地的服务器
 * 
 * 然后监听request(请求)事件，当客户端有请求到来的时候，就会掉用这个
 * 事件的回调函数，其中回调函数主要包含req和res两个参数，分别代表的是
 * 请求和响应
 * 
 * 我们可以通过req来了解请求的相关信息，通过res来对客户端做出响应
 * 
 * 然后通过writeHead这个方法来设置我们的响应头
 * wrtie这个方法向客户端输出数据
 * end来结束我们的响应，其中我们可以将write里面的数据存入end方法里面
 * 
 * 
 */

/**
 * 总结：当客户端创建一个请求的时候，客户端就会创建一个请求，同时就会
 * 触发我们服务器对象的request事件，这个事件接收两个参数，分别是客户端的
 * 请求对象和服务器端的响应对象，我们可以利用请求对象获取到客户端请求的一些信息
 * 我们可以利用响应对象，把我们服务器端的东西发送到客户端
 * 
 */