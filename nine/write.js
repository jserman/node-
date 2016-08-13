const fs = require("fs");

const writeStream = fs.createWriteStream("./write.txt",{
    mode:0777,
    encoding:"utf8",
    flags:"w"
})

writeStream.write("this is the content from nodejs");