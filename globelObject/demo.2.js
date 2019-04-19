var num = 5
function say () {
  num--
  if (num <= 0) {
    console.log(num)
    clearInterval(interval)
  }
  console.log('hello', num);
}

var interval = setInterval(say, 1000)
