let a = 1;
console.log("模块开始初始化");
module.exports = () => {
    console.log("hi");
    console.log(a++);
};
console.log("模块初始化结束");