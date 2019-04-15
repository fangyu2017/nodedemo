// 引入 events 模块
const events = require('events');
// 创建 eventEmitter 对象
const eventEmitter = new events.EventEmitter()

let connectionHanler = function () {
  console.log('链接成功')
  eventEmitter.emit('getdata')
}
eventEmitter.on('connection', connectionHanler)
eventEmitter.on('getdata', function () {
  console.log('获取数据成功')
})

console.log('请求结束');
eventEmitter.emit('connection')