const http = require("http");
const fs = require("fs");
const options = {
    method:"GET",
    host:"localhost",
    port:4001
};
const request = http.request(options, (res) => {
    console.log(res.statusCode);
    var stream = fs.createWriteStream("./getcontent.txt");
    res.pipe(stream);
})

//结束请求
request.end();