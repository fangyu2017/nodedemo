const http = require('http')
const url = require('url')

function start (route) {
  function onRequest (request, response) {
    console.log(request.url);
    if (request.url != '/favicon.ico') {
      var pathName = url.parse(request.url).pathname
      console.log(`request on ${pathName} received`);
      route(pathName);
      response.writeHeader(200, {'Content-type': 'text/plain'})
      response.write('hello world')
      response.end()
    }
    
  }
  http.createServer(onRequest).listen(8888)
  console.log('server is running')
} 


module.exports = start