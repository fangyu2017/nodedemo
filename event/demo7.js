const fs = require('fs')

//管道

// 创建可读流
let readerStream = fs.createReadStream('./input.txt')
readerStream.setEncoding('utf8')
// 创建可写流
let writeSteam = fs.createWriteStream('index.txt')
readerStream.pipe(writeSteam)

console.log('ok');