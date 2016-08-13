const child_process = require("child_process");

const spawn = child_process.spawn;

// const child = spawn("ls",["-a"]);
const child = spawn("node",["child-stdin.js"]);

setInterval(()=>{
    var number = Math.floor(Math.random()*100+10);

    //将产生的这个数据写给子进程
    child.stdin.write(""+number);

    child.stdout.once("data", (data) => {
        // child.kill();
        console.log(`the data is ${data}`);
    })
},2000);



// child.stdout.on("data", (data) => {
//     console.log(`the data is ${data}`);
// })

// child.stderr.on("data", (data) => {
//     console.log(`the error is ${data}`);
// })

// //我们也可以监听子进程的退出事件
// child.on("exit",(code)=>{
//     console.log(`the child process exit with the code ${code}`);
// })
// //一般以code为非0的时候表示有错误发生
