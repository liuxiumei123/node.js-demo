const readline = require('readline');
let rl = readline.createInterface({
      input: process.stdin,
        output: process.stdout,
        completer: completer

});
rl.on('line', (line) => {
  if (line === 'exit' || line === 'quit' || line === 'q') {
            rl.close();
                
  } else {
            console.log('您输入了：', line);
                
  }

});

rl.on('close', () => {
      console.log('行数据读取操作被终止');

});

function completer(line) {
      const completions = '.help .error .exit .quit .q'.split(' ');
      let hits = completions.filter((c) => {
                return c.indexOf(line) === 0;
                    
      });
          return [hits.length ? hits : completions, line]

}
