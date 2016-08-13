const http = require("http");
const req = http.request({url:"./test.txt"},(response)=>{
    response.on("data", (content)=>{
        console.log(`get content ${content}`);
    })
    
    response.on("end", ()=>{
        console.log("request over");
    })
})
req.end();