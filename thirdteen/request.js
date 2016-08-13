//使用request模块来创建和简化http请求
const request = require("request");

//之后需要提供一个url和一个回调函数，我们就能够创建请求了
// request("http://localhost:4001", (err, response, body) => {
//     //这段代码会执行get请求，同时会接收响应和响应主体的缓冲区
//     if(err){
//         console.log("请求出错了");
//         console.log(`${err.message}`);
//         return;
//     }
//     console.log(body.toString());
// })

//除了使用这种方式来创建我们的请求外，我们也可以通过其它的http动词来创建对应的请求
/**
 * request.put(url) --> 发布一个put请求
 * request.post(url) --> 发布一个post请求
 * request.head(url) --> 发布一个head请求
 * request.del(url) --> 发布一个del请求
 * request.get(url) --> 发布一个get请求 === request
 * 
 * 
 * 除此之外，我们也可以使用一个option对象来代替url,这个配置对象主要包含以下的属性
 * {
 *      url/uri:完全合法的url或者是经过url.parse()解析过的url对象
 *      method:http的方法，默认是get
 *      headers:http请求头，默认是{}
 *      qs:一个对象，作为查询字符串附加到url后面的名称-值对
 *      body:post和put的请求主体，必须是字符串或者buffer
 *      form:将请求的主体设置成查询字符串的方式，并在请求投中增加了内容类型:application/x-www-form-urlencoded;charset=utf-8
 *      json:将请求的主体设置成了json类型的，并在头部数据增加了内容类型application/json
 *      followRedirect:跟随具有状态码3xx的响应，这类响应表示重定向，默认是true
 *      maxRedirects:跟随重定向的最多次数，默认是10
 *      onResponse:如果是true则回调函数将会在response事件发生的时候调用，而不是在end事件发生的时候调用
 *      encoding:设置编码格式，相当于setEncoding的效果，如果为null，则响应主体以buffer的形式返回
 *      pool:表示请求代理的哈希对象，如果忽略这个选项，请求将会使用全局套接字池
 *      pool.maxSockest:一个整数，表示套接字池中的最大数目
 *      timeout:一个整数，表示放弃之前等待对请求做出的响应时间，单位是毫秒
 * }
 */

request.head("http://localhost:4001", (err, response, body) => {
    if(err){
        console.log(`出错了，${err.message}`);
    }
    console.log(response);
    console.log(body.toString());
})