#!/usr/bin/node

var fs=require('fs');
var argv=process.argv;
var src,lnk,soft;


switch(argv.length){
  case 4:
    src=argv[2];
    lnk=argv[3];
    fs.linkSync(src,lnk);
    break;
  case 5:
    soft=argv[2];
    if(soft=='-s'){
      src=argv[3];
      lnk=argv[4];
      fs.symlinkSync(src,lnk);
    }
    break;
    defalut:console.log('wrong!');
}
