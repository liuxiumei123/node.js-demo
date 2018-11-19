var cheerio = require('cheerio');
var http = require('http');
var https = require('https');
var express = require('express');
var router = express.Router();
process.env.NODE_TLS_REJECT_UNAUTHORIZED="0";

var url = "https://www.lagou.com/jobs/list_%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91?kd=%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91&spc=1&pl=&gj=&xl=&yx=&gx=&st=&labelWords=label&lc=&workAddress=&city=%E5%85%A8%E5%9B%BD&requestId=&pn=1";

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'node爬虫'
  });

});

router.get('/page', function (req, res) {
  var arr = getURL(url);
  res.send(arr);
});

function getURL(url) {
  const options = {
            requseCert:false,
            rejectUnauthorized:false,
            headers: {
              "uer-Agent":" Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.67 Safari/537.36"
            }

  };

  https.get(url,options,function (res) {
    console.log(res.statusCode);
    console.log(res.headers.location)
    if (res.statusCode >= 300 && res.statusCode <= 400) {
      getURL(res.headers.location);
    } else {
      var html = [];
      var size = 0;
      res.on('data', function (chunk) {
        html.push(chunk);
        size += chunk.length;
      });
      res.on('end', function () {
        html = Buffer.concat(html, size).toString();
        console.log("长度："+html.length);
        var $ = cheerio.load(html);
        var arr = [];

        $('body').find('.list_item_top').each(function () {
          var obj = {};
          obj.detailedURL = $(this).find('.position_link').attr('href');
          obj.post = $(this).find('h3').text();
          obj.formatTime = $(this).find('.format-time').text();
          obj.salary = $(this).find('.money').text();
          obj.demand = $(this).find('.money').next().html();
          obj.companyName = $(this).find('.company_name').find('a').text();
          obj.companyURL = $(this).find('.company_name').find('a').attr('href');
          obj.industry = $(this).find('.industry').text();
          arr.push(obj);
        });
        return arr;
      });
    }
  });
}

module.exports = router;
