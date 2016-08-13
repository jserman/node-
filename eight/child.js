const child_process = require("child_process");
const  exec = child_process.exec;

//执行命令
// exec("ls", (err,stdout,stderr)=>{
//     if(err) throw new Error(err);
//     console.log(stdout);
//     console.log(stderr);
// })

// exec("cat *.js | wc -l", (err,stdout,stderr)=>{
//     if(err) throw new Error(err);
//     console.log(stdout);
//     console.log(stderr);
// })

// exec("ls", {
//     cwd:"../seven/",
//     // encoding:"base64"

// },(err,stdout,stderr)=>{
//     if(err) throw new Error(err);
//     console.log(stdout);
//     console.log(stderr);
// })

// var env = process.env,
//     envName,
//     envCopy = {};

// for(envName in env){
//     envCopy[envName] = env[envName];
// }

// envCopy["custom"] = "valeu1";

// exec("ls",{env:envCopy},(err,stdout,stderr)=>{
//     if(err) throw new Error(err);
//     console.log(stdout);
//     console.log(stderr);
// });

console.log("我是来自child的内容");
// console.log(process.env.num);
// console.log(typeof process.env.num);
