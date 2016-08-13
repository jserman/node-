const fs = require("fs");
const receiveData = (data) => {
    console.log(`the data is ${data}`);
}
const readStream = fs.createReadStream("./test.txt");
/*
readStream.on("data",()=>{
    //这个事件被触发的时候，移除data事件，看看后面还会有事件触发码
});
readStream.addListener("data", receiveData);
readStream.addListener("data", (data)=>{
    console.log(`i can also get teh content ${data}`);
});
readStream.removeListener("data", receiveData);
*/

//readStream.once("data",receiveData);
//readStream.emit("data");
//readStream.emit("data");

//我们可以原生的实现这个方法
const EventEmitter = require("events").EventEmitter;
EventEmitter.prototype.once1 = function(type, callback){
    this.on(type, function listener(){
        console.log("自定义的被调用了");
        this.removeListener(type, listener);
        callback.apply(this,arguments);
    })
}

readStream.once1("data",receiveData);