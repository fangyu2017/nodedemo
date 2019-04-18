// 创建压缩文件
const fs = require('fs')
const zlib = require('zlib')

fs.createReadStream('input.txt.zip')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input2.txt'))

console.log('解压完成');