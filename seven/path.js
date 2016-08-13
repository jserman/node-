const path = require("path");
const fs = require("fs");

console.log(path.normalize("./www/wamp//js/js-pre"));

console.log(path.join("../","www/wamp","js"));

console.log(path.resolve("./wamp","www","./homme","./js"));

console.log(path.relative("c:/wamp/www/js","d:/fe/alibaba/js"));

console.log(path.relative("/data/orandea/test/aaa","/data/orandea/impl/bbb"));

console.log(path.dirname("./wamp/www/javascript/../text.txt"));

console.log(path.basename("./wamp/www/javascript.js"));

console.log(path.basename("./wamp/www"))

console.log(path.basename("./wamp/www/javascript.js",".js"));
console.log(path.basename("./wamp/www/javascript.js",".html"));
console.log(path.basename("./wamp/www/javascript",".js"));

console.log(path.extname("./wamp/www/javascript.js"));
console.log(path.extname("./wamp/www/javascript"));

console.log(fs.exists("./"));
console.log(fs.exists("./wamp/www/js.js"));

fs.exists("./wamp/www/js.js", (exists) => {
    exists ? console.log("文件存在") : console.log("文件不存在");
})