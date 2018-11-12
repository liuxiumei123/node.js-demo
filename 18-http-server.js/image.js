#!/usr/bin/node

var http = require('http'),
        fs = require('fs'),
        qs = require('querystring'),
        log = console.log;

http.createServer((req, res) => {
        log('url', req.url);
        log('headers', req.headers);
        log('');
        var path=__dirname+'/public/images/';
        

        if (req.url != '/favicon.ico' && req.method === 'POST') {
          
        var boundary=req.headers['content-type'].split(';')[1].trim().split('=')[1];
        log('');
                if (req.url !== '/upload') {//打开页面失败，不是指定页面
                        show(res, errorPage);
                        return;
                }

                req.setEncoding('binary');
                var file="";
                req.on('data', (data) => {
                        file += data;

                });

                req.on('end', () => {
                       // log('接受数据为：',file);
                        //切割数据获取文件名称
                        var array=file.split('\r\n\r\n');
                        var fff=array[0].split('\r\n')[1];
                        var ff=fff.split(';')[2].trim();
                        var f=ff.split('=')[1];
                        var filename=f.slice(1,f.length-1);

                        //切割数据获取文件内容
                        var data=array[1].split('\r\n--'+boundary)[0];



                     fs.writeFileSync(__dirname+'/public/images/'+filename, data, {
                             'encoding': 'binary'
                     });
                    show(res, okPage.replace('%','/images/'+filename));//展示图片页面

                });


        } else {
                if (req.url === '/') {//GET请求 展示表单页面
                        show(res, uploadPage);

                } if(req.url.indexOf('/images')!=-1){//展示图片
                   res.writeHead(200, {'Content-Type': 'image/png'});
                   res.end(fs.readFileSync(__dirname+'/public'+req.url));
                } else {
                        show(res, errorPage);//展示错误页面
                }

        }

}).listen(8080);

function show(res, page) {
        res.statusCode = 404;
       // res.setHeader('Content-Length', page.length);
       // res.setHeader('Content-Type', 'text/html');

        res.end(page);

}

var uploadPage = `
        <!DOCTYPE html>
        <html lang="zh">
        <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>form表单</title>
        </head>
        <body>
                <h1>请上传图片</h1>
                <form action="http://192.168.88.144:8080/upload" method="post" enctype="multipart/form-data">
                        <input type="file" name="file" /><br /><br />
                        <input type="submit" value="点击提交"/>
                </form>
        </body>
        </html>
`;
       

var okPage = `
        <!DOCTYPE html>
        <html lang="zh">
        <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>form表单</title>
        </head>
        <body>
                <h1>展示上传的图片:</h1>
                <img src="%"/>
        </body>
        </html>
`;

var errorPage = `
        <!DOCTYPE html>
        <html lang="zh">
        <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>form表单</title>
        </head>
        <body>
                <h1>Sorry! There is  nothing!</h1>
        <a href="/">back to upload image</a>
        </body>
        </html>
`;
