const fs = require("fs");

fs.open("./read.txt","r" ,(err, fd) => {
    if(err) throw new Error(err);
    const read = fs.createReadStream(null, {fd:fd, encoding:"utf8", start:10, end:20});
    read.on("data", (data) => {
        console.log(data);
    })
})

