#!/usr/bin/node

console.log('CPU架构信息:',process.arch);
console.log('系统版本信息:',process.version)
console.log('进程ID:',process.pid);

process.stdin.resume();

console.log("当前进程GID",process.getgid());
console.log("当前用户UID",process.getuid());

console.log('当前目录路径',process.cwd());

console.log('内存使用情况',process.memoryUsage());

//console.log('环境变量',process.env);
console.log('环境变量',process.env.HOME);


