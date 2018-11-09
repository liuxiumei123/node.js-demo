#!/usr/bin/node

var http = require('http'),
        fs = require('fs'),
        qs = require('querystring'),
        log = console.log;

http.createServer((req, res) => {
        log('url', req.url);
        log('headers', req.headers);
        log('');
        var boundary=req.headers['content-type'].split('; ')[1].split('=')[1];
        log('');

        if (req.url != '/favicon.ico' && req.method === 'POST') {
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
                        //切割数据
                        var array=file.split('\r\n\r\n');
                        log('包数据',array[0]);
                        log('包长度',array[0].split('\r\n').length);
                        var fff=array[0].split('\r\n')[1];
                        log(fff);
                        var ff=fff.split('; ')[2];
                        log(ff);
                        var f=ff.split('=')[1];
                        log(f);
                        var filename=f.slice(1,f.length-1);
                        var data=array[1].split('--'+boundary)[0];
                        log(array[1].split('--'+boundary)[1]);



                       // file.splice(-2,2);
                     fs.writeFileSync(filename, data, {
                             'encoding': 'binary'
                     });
                    //res.end(file);
                    show(res, okPage.replace('%',__dirname+"/"+filename));//展示图片页面

                });


        } else {
                if (req.url === '/') {//GET请求 展示表单页面
                        show(res, uploadPage);

                } else {
                        show(res, errorPage);//展示错误页面

                }

        }

}).listen(8080);

function show(res, page) {
        res.statusCode = 404;
        res.setHeader('Content-Length', page.length);
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
