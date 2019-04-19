const fs = require('fs')
fs.open('../api/doc.json', 'r+', function (err, fd) {
  if (err) {
    return console.err(err);
  }
  console.log(fd);
  console.log('打开文件成功');
})