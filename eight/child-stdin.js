const child_process = require("child_process");

process.stdin.resume();
process.stdin.on("data", (data) => {
    var number;
    try{
        number = parseInt(data.toString(), 10);
        number = number + 1;
        process.stdout.write(""+number);
    }catch(err){
        process.stderr.write("错误信息是"+err.message);
    }
})

// process.on("SIGUSR2",()=>{
//     console.log("okokoko");
// })