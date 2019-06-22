const GET_UP_TIME = 7
const events = require('events')
const spark = new ME('spark')
const ali = new Cat('ali')
events.on('eat', function () {
  ali.goToEat()
})
getUp()
haveBreakfast()
takeCareOfMyCat()
goToTheOffice()
function getUp() {
  const time = new Date().getHours()
  if (time === GET_UP_TIME) {
    spark.getUp()
  }
}
function haveBreakfast() {
  spark.haveBreakfast()
}
function goToTheOffice() {
  spark.goToTheOffice()
}

function takeCareOfMyCat() {
  events.EventEmitter('eat')
}

function Cat(name) {
  this.name = name
}
Cat.prototype._howl = function () {
  console.log('miaomiaomiao')
}
Cat.prototype.goToEat() {
  console.log('eat')
}
function ME(name) {
  this.name = name
}
ME.prototype.getUp() {
  console.log('get up')
}
ME.prototype.haveBreakfast() {
  console.log('haveBreakfast')
}
ME.prototype.goToTheOffice() {
  console.log('goToTheOffice')
}