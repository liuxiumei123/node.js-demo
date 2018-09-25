#!/usr/bin/node

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.push('hello');
process.stdin.push('world')
process.stdin.pipe(process.stdout);

process.stdin.on('data',function(data){
  process.stdout.write(data.toUpperCase());
})


for(var x='a'.charCodeAt();x<='z'.charCodeAt();x++){
  process.stdout.write(String.fromCharCode(x));
}

process.stdout.write('\n');

