#!/usr/bin/node

var fs=require('fs');
var dir=process.argv[2]||__dirname;

console.log(fs.readdirSync(dir));


