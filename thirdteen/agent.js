/**
 * 在创建http请求的时候，node在内部使用了一个代理。
 * 代理是nodejs中的一种实体，该实体被用来创建请求，它主要负责维护一个活动套接字池
 * 。套接字池里面包含了已被打开但是未被使用的连接。当出现新的http请求的时候，代理
 * 会要求连接保持活动状态。当请求结束的时候，并且在套接字上没有额外的请求等待释放的时候。
 * 套接字就会被关闭。这意味着我们不用手动的创建http客户端。
 * 
 * 当我们创建了一个请求并选择了可用的套接字的时候，或者为该请求创建一个新的连接的时候。
 * http.clientRequest会发射一个socket事件。在请求结束的时候，套接字会发射close事件或者
 * agentRemove事件时从代理的套接字池中被删除
 * 
 * 所以如果我们想让http请求打开段较长的时间，我们可以将其从套接字池中删除 
 * */

const http = require("http");
const port = 4001;
const req = http.request({host:"www.baidu.com"},(res) => {});
req.on("sockte", (socket) => {
    socket.emit("agentRemove");
});
req.end();

/**
 * node允许在一个给定的每个主机-端口上最多有5个打开的套接字，这意味着在负载较重
 * 的情况下，node会将请求串行排列在同一个主机-端口以便重用套接字。我们可以通过向
 * options传递agent:false来使代理的套接字池失效
 * 我们也可以修改http.Agent.defaultMaxSockets来改变套接字池中的每个主机-端口
 * 所允许的打开套接字的最大数目
 * require("http").Agent.defaultMaxSockets这种修改是全局性的，但是如果我们已经
 * 对指定的端口和host创建了请求，那么这个修改对这个是不起作用的
 * 
 * 除此之外，我们也可以在创建请求的时候，来说明所允许打开的套接字的最大数目
 * var option = {maxSockets:10};
 * var agent = new Agent(option);
 * http.request({agent:agent-->使用上面的属性}) 
 * */
