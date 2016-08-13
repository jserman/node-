https为标准的http协议增加了TLS的安全性，在nodejs中，https被实现为一个独立于http
模块所存在的一个单独的模块。
https的核心模块继承了http的模块。并将tls模块作为传输机制。

1. 构建https服务器
    首先，我们创建服务器私钥和自签名证书
    openssl genrsa -out server_key.pem 1024
    openssl req -new -key server_key.pem -out server_csr.pem
    openssl x509 -req -in server_csr.pem -signkey server_key.pem -out server_cert.pem

    然后，我们需要创建我们的服务器：server.js

2. 验证https客户端证书
    如果我们正在创建的是https服务器，那么我们的主要关注点也是
    服务器和客户端之间的通信内容是否被加密。
    我们可以通过服务器的一些启动选项来让其验证客户端的真实性
    主要依赖的两个基本选项就是
    {
        key:....
        cert:....
        requestCert:true,  //要求客户端发送证书
        rejectUnauthorized:true //要求服务器拒绝那些未通过认证中心链验证的证书
    }
    而且如果我们忽略了rejectUnauthorized选项，我们依然可以通过查看客户端流上的
    authorized属性来确定客户端是否可信

3. 在node中，创建https请求与创建http请求非常相似。
    初始化客户端
        我们可以针对https服务器来创建https请求。这个时候，我们就应该使用
        https.request()这个方法。同样，我们在创建请求的时候，需要指定如下的几个基本选项
        {
            host:ip地址
            port:端口号
            method:创建请求的方法
            path:请求的路径
        }

        验证https服务器证书
            当进行请求的时候，在获得了response事件及response对象之后，就可以查看response
            对象。response对象在其socket属性内有一个stream对象，由于他是TLS流，一次我们可以在其上面
            调用getPeerCertificate()函数来获取服务器证书