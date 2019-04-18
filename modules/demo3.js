const People = require('./demo2')
console.log(People);
var peo = {
  name: 'zhangsan'
}
var people = new People(peo)
console.log(people.name);
people.say()