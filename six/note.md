nodejs也支持setInterval、setTimeout、clearInterval、clearTImeout这四个基本的函数.基本的用法也和javascript中的一样

1. 使用process.nextTick将函数推迟到下一轮事件循环执行
    有的时候浏览器端的javascript程序员会使用setTimeout(callback,0)将函数推迟到下一个事件循环执行。第二个参数为0，它告诉javascript在所有的被挂起的事件处理完毕之后再执行这个callback。这种技术常常用于执行一些不需要立即执行的动作
    
    我们知道，nodejs中的事件循环是在一个处理事件队列的循环中进行的，事件循环每执行一次，就表示一次tick。我们可以将事件循环安排在下一轮的时候调用，而setTimeout使用的是javascript执行时候的内部执行队列，而不是事件循环
    
    我们可以使用process.nextTick(callback)将函数延迟到下一轮事件循环再执行。这种方法，回调函数会在事件队列内的所有事件处理完毕之后再执行。这要比激活javascript中所有的事件队列要快的多
    
    node和javascript采用的都是单线程事件循环的方式进行工作的，每次循环的时候，通过调用相关的回调函数来处理队列内的下一个事件，当事件处理完之后，事件循环就会取得结果并开始处理下一个事件，如此的反复，直到事件队列为空，如果某个函数占用了很长时间，那么就会阻塞后期事件的执行，这让应用程序或者服务变得十分的缓慢
    
    