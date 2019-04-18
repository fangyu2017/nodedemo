const http = require('http')
const fs = require('fs')
/**
 * 异步读取文件
 */
// fs.readFile('./api/doc.json', 'utf8', (err, data) => {
//   if (err) throw err
//   console.log(data)
// })
/**
 * 同步读取文件
 */
var data = fs.readFileSync('./api/doc.json')
console.log(data.toString())
console.log("程序执行结束!")

http.createServer((req, res) => {
  res.writeHead(200, {"Content-type": 'text/plain'})
  res.end('data')
  
}).listen(3000, '127.0.0.1')
console.log('server is running....');