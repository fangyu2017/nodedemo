
const fs = require('fs')

//创建可读流

let data = ''
let readerStream = fs.createReadStream('./api/doc.json')
readerStream.setEncoding('UTF8')
readerStream.on('data', function (chunk) {
  console.log(chunk)
  data += chunk
})
readerStream.on('end', function () {
  console.log(data);
})
readerStream.on('error', function (error) {
  console.log(error);
})
console.log('ok');