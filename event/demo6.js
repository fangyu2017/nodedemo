const fs = require('fs')

//创建可写流
let data = '今天是充满希望的一天'
let writeStream = fs.createWriteStream('output.txt')
writeStream.write(data, 'utf8')
writeStream.end()
writeStream.on('finish', function () {
  console.log('写入完成');
})
writeStream.on('error', function (err) {
  console.log(err);
})
console.log('ok');