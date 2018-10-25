#!/usr/bin/node

var http = require('http'),
    url  = require('url');

//代理商服务器开启，接受客户端数据(req:可读流)，
//请求并把数据发送给真正的服务器(proxyRequest:可写流)并接受真正的服务器返回的数据(proxyResponse:可读流)，
//接受的数据发给客户（res:可写流)

http.createServer((req, res) => {
    console.log("从客户到代理商的请头求："+req.headers);
    var options = url.parse(req.url);
        options.headers = req.headers;

        //返回一个可写流
        var proxyRequest = http.request(options, (proxyResponse) => {
            proxyResponse.on('data', (chunk) => {//可读流，从真正的服务器返回来的数据
                  console.log("真正服务器返回的有效数据："+chunk.toString('utf8'));
                  res.write(chunk, 'binary');//把有效数据返回给客户
                            
            });
            proxyResponse.on('end', () => { res.end();  });//可读流,客户收到完整数据，数据发送结束
           
            console.log("真正服务器的状态码和响应头："+proxyResponse.statusCode, proxyResponse.headers);
            //真正服务器发送的数据原封不动的返回给客户
            res.writeHead(proxyResponse.statusCode, proxyResponse.headers);
                        
        });

        //代理商从客户接受到的数据作为请求原封不动的发送到真正的服务器上面
        req.on('data', (chunk) => {
            console.log(chunk);
            proxyRequest.write(chunk, 'binary');
                    
        });

        req.on('end', () => {//从客户端接受数据结束，往真正的服务器发送数据结束
            proxyRequest.end();
                
        });

}).listen(8080);


