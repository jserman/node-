const tls = require("tls");
const fs = require("fs");

const serverOption = {
    key:fs.readFileSync("./my_key.pem"),
    cert:fs.readFileSync("./my_cert.pem")
};


//连接服务器
const client = tls.connect(4000, "localhost", serverOption, ()=>{
    console.log("connected");
})

client.on("error", (err) => {
    console.log(err.message);
})