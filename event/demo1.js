const http = require('http')

http.createServer((req, res) => {
  res.writeHead(200, {"Content-type": 'text/plain'})
  res.end('hello')
}).listen(3000, '127.0.0.1')
console.log('server is running....');