var http = require('http')
var fs = require('fs')
var server = http.createServer(function(req, res) {
  if (req.url !== '/favicon.ico') {
    console.log(req.url)
    if (req.url === '/index' || req.url == '/') {
      res.writeHeader(200, {'Content-type' : 'text/html'})
      fs.createReadStream(__dirname + '/index.html').pipe(res)
    } else if (req.url == '/api/about' || req.url == '/api/about.html') {
      res.writeHeader(200, {'Content-type' : 'text/html'})
      fs.createReadStream(__dirname + '/api/about.html').pipe(res)
    } else if (req.url == '/api/doc') {
      res.writeHeader(200, {'Content-type' : 'text/html'})
      fs.createReadStream(__dirname + '/api/doc.json').pipe(res)
    }
  }
})

server.listen(3000, '127.0.0.1')
console.log('server is running....');