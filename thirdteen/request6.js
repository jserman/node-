const request = require("request");
const inspect = require("util").inspect;
const body = {
    a:1,
    b:2, 
    c:3
}
const options = {
    url:"http://localhost:4001/print/body",
    headers:{
        "Custorm-Header":"this header created by saisai"
    },
    json:body
}

request(options, (err, res, body) => {
    if(err){
        throw err;
    }
    console.log(inspect({
        err:err,
        headers:{
            statusCode:res.statusCode,
            headers:res.headers
        },
        body:JSON.parse(body)
    }))
})