const spawn = require("child_process").spawn;

const child = spawn("node",["child.js"]);

child.stdout.on("data", (data) => {
    console.log(`the tail result is ${data}`);
})
child.stderr.on("data",(data) => {
    console.log(`the error data is ${data}`);
})