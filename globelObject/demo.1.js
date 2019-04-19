
// let hello = function () {
//   console.log(111);
// }
// setTimeout(hello, 2000)

function demo(param) {
  console.log(222)
}

let timeout = setTimeout(demo, 2000)
clearTimeout(timeout)