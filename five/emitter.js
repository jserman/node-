const util = require("util");
const EventEmitter = require("events").EventEmitter;

const MyClass = function(){}

util.inherits(MyClass, EventEmitter);

MyClass.prototype.someMethod = function(){
    this.emit("custom-event","参数一","参数二");
}

const myInstance = new MyClass();

myInstance.on("custom-event", (arg1, arg2) => {
    console.log(arg1,arg2);
    console.log("this is the custom from me");
});



myInstance.emit("custom-event");
myInstance.someMethod();

const MyTrick = function(){
    setInterval(()=>{
        this.emit("trick");
    },2000);
}

util.inherits(MyTrick, EventEmitter);

const trick = new MyTrick();

trick.on("trick", ()=>{
    console.log("trick");
});