const child_process = require("child_process");
const exec = child_process.exec;

exec("node child.js",{env:{num:123}},(err, stdout, stderr) => {
    if(err){
        throw new Error(err);
    }
    console.log(stdout);
})
