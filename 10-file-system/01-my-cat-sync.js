#!/usr/bin/node

var fs=require('fs');

var file=process.argv[2];

var txt=fs.readFileSync(file,{encoding:'utf8'});

process.stdout.write(txt);
