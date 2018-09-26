#!/usr/bin/node


var Writeable=require('stream').Writable;
var util=require('util');

function WriteStream(){
  Writeable.call(this);
}

util.inherits(WriteStream,Writeable);

WriteStream.prototype._write=function(chunk,encoding,callback){
process.stdout.write('\033[1;32m'+chunk.slice(0,chunk.length-1)+"\033[1;37m");
callback;
}


process.stdin.pipe(new WriteStream());
