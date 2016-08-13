//这个文件主要是用于创建一个简单的请求的
const request = require("request");
const inspect = require("util").inspect;

request("http://localhost:4001", (err, res, body) =>{
    if(err) {
        throw err;
    }
    console.log(inspect({
        err:err,
        res:{
            statusCode:res.statusCode
        },
        body:JSON.parse(body)
    }))
})
