#!/usr/bin/node

var fs=require('fs');

var src=process.argv[2];
var dst=process.argv[3];


fs.createReadStream(src).pipe(fs.createWriteStream(dst));
var mode=fs.statSync(src).mode;
fs.chmodSync(dst,mode);
