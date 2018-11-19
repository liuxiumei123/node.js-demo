var cheerio = require('cheerio');
var http = require('http');
var https = require('https');
var express = require('express');
var router = express.Router();
process.env.NODE_TLS_REJECT_UNAUTHORIZED="0";

var url = "https://sale.vmall.com/hwmate.html?cid=10600";

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'node爬虫'
  });

});

router.get('/page', function (req, res) {
  var RES=res;
   const options = {
            requseCert:false,
            rejectUnauthorized:false,
            headers: {
              "uer-Agent":" Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.67 Safari/537.36"
            }

  };
  https.get(url,options,function (res) {
   
      var html = [];
      var size = 0;
      res.on('data', function (chunk) {
        html.push(chunk);
        size += chunk.length;
      });
      res.on('end', function () {
        html = Buffer.concat(html, size).toString();
        console.log("长度："+html.length);
        RES.send(html);
      });
    
  });
});


module.exports = router;
