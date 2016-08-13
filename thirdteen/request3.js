//这个文件主要是用于跟随重定向的

/**
 * request模块的众多特性之一就是，默认情况下，它会跟随重定向.有的时候会造成循环重定向，这个时候，我们就需要
 * 设置maxRedirects来控制跟随重定向的最大次数
 */

const request = require("request");
const inspect = require("util").inspect;

request("http://localhost:4001/redirect", (err, res, body) => {
    if(err){
        throw err;
    }
    console.log(inspect({
        err:err,
        headers:{
            statusCode:res.statusCode
        },
        body:JSON.parse(body)
    }))
})