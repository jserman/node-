const spawn = require("child_process").spawn;

const child = spawn("sleep", ["10"]);

setTimeout(()=>{
    child.kill("SIGUSR2");
},3000);

child.on("exit", (code,signal) => {
    if(code){
        console.log(`the process exit with the code ${code}`);
    }else if(signal){ 
        console.log(`the process exit with the signal ${signal}`);
    }
})

process.on("SIGUSR2",()=>{
    console.log("the process is killed");
})