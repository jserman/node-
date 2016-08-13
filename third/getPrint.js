const print = require("./print.js");  //nodejs中，我们使用require方法来加载我们的模块。这个方法返回的是被加载模块的模块对象，然后，我们就能够将这个对象赋值给任意一个局部变量

const {printA,printB,printC} = print;

printA();
printC();
printB();