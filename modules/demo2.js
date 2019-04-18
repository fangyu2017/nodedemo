 function People(options) {
  // console.log(JSON.stringify(options))
  this.name = options.name || 'lisi'
  this.say = function () {
    console.log(`my name is ${this.name}`)
  }
}
// let people = new People('')
// people.say()
// module.exports = {
//   People
// }
module.exports = People