const fs = require("fs");

fs.open("./read.txt", "r",(err, fd) => {
    if(err) throw new Error(err);
    const read = fs.createReadStream(null, {fd:fd, encoding:"utf8"});
    const write = fs.createWriteStream("./write.txt",{encoding:"utf8",mode:0777,flags:"a+"});
    read.pipe(write,{end:false});

    read.on("end", () => {
        console.log("read over");
    })
})