#!/usr/bin/node



const buf = Buffer.from([1, 2, 3]);

 for (const b of buf) {
   console.log(b);
   }
//   还可以使用 buf.values()、buf.keys()、与 buf.entries() 创建迭代器。
// }

console.log(buf.values());
console.log(buf.keys());
console.log(buf.entries());
console.log('');
const buf1 = Buffer.from('1234');
const buf2 = Buffer.from('0123');
const arr = [buf1, buf2];
console.log(Buffer.compare(buf1,buf2));
console.log(Buffer.compare(buf2,buf1));

console.log(Buffer.compare(buf1,buf1));
console.log(buf1.compare(buf2));
