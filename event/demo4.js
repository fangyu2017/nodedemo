// 引入 events 模块
const events = require('events');
const eventEmitter = new events.EventEmitter()
//监听器1
let listener1 = function listener1() {
  console.log('第一个监听器执行了')
}
let listener2 = function listener2(params) {
    console.log('第二个监听器执行了');
}
// eventEmitter.on('listener1', listener1)
// eventEmitter.on('listener2', listener2)
// eventEmitter.emit('listener1')
// eventEmitter.emit('listener2')
eventEmitter.addListener('connection', listener1)
eventEmitter.addListener('connection', listener2)
eventEmitter.emit('connection');
// eventEmitter.removeListener('connection', listener2)

let evnetCounts = eventEmitter.listenerCount('connection')
console.log(evnetCounts)
eventEmitter.removeListener('connection', listener2)
eventEmitter.emit('connection')
eventCounts = eventEmitter.listenerCount('connection')
console.log(eventCounts)

eventEmitter.removeAllListeners()
console.log('所有事件清除')
eventEmitter.emit('connection')
eventCounts = eventEmitter.listenerCount('connection')
console.log(eventCounts)

console.log('程序执行完毕')