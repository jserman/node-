process.nextTick(()=>{
    var a = 0;
    while(a<10){
        console.log(a++);
    }    
});

process.nextTick(()=>{
    console.log("this is the second");
})

setTimeout(()=>{
    console.log(this)
},1000);