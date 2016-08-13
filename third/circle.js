/*
    在node中，文件和模块是一一对应的。一个文件就是一个模块。我们通过module.exports向外暴露出模块的基本方法
*/

const Circle = (x,y,r) => {
    var r_squared = () => {
        return Math.pow(r,2);
    };
    var area = () => {
        return Math.PI * r_squared();
    };
    
    return {
        area
    };
};

module.exports = Circle;