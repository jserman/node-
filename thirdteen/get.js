const http = require("http");

http.get({host:"www.baidu.com"},(res) => {
    console.log(res);
});