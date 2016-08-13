//创建post请求
const request = require("request");
const inspect = require("util").inspect;

request.post("http://localhost:4001/redirect", (err, res, body) => {
    if(err){
        throw err;
    }
    console.log(inspect({
        err:err,
        headers:{
            statusCode:res.statusCode
        },
        body:body.toString()
    }))
})