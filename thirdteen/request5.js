const request = require("request");
const inspect = require("util").inspect;
const options = {
    url:"http://localhost:4001/",
    headers:{
        "Custorm-Header":"this header created by saisai"
    }
}

request.put(options, (err, res, body) => {
    if(err){
        throw err;
    }
    console.log(inspect({
        err:err,
        headers:{
            statusCode:res.statusCode,
            headers:res.headers
        },
        body:JSON.stringify(body)
    }))
})