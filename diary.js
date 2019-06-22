const EventEmitter = require('events').EventEmitter
const ev = new EventEmitter()
const DATE = new Date(2019, 6, 21)
const WEATHER = 'sunny day'
const LOCATION = 'shenzhen'

let myPackage = new ExpressPackages('*')
let mySelf = new Person('*')

ev.on('package_arrive', ()=> { 
  myPackage.sentToCabinet()
})

ev.emit('package_arrive')

ev.on('phone_message', ()=> {
  mySelf.hasMsg()
})

// 当快递放入快递柜， 不到10s，收到信息
setTimeout(() => {
  ev.emit('phone_message')
}, 10000)


ev.on('midday_rest', ()=> {
  mySelf.goOutFromCopany()
})

ev.emit('midday_rest')

ev.on('self_reach_cabinet', ()=> {
  mySelf.scanQrCodeGetPackage()
})

ev.emit('self_reach_cabinet')

ev.on('meeting_begin', ()=> {
  mySelf.attend()
})

ev.emit('meeting_begin')

ev.on('meeting_feeling', ()=> {
  mySelf.feelBad()
})

setTimeout(() => {
  ev.emit('meeting_feeling')
}, 1800 * 1000)


ev.on('meeting_end', ()=> {
  mySelf.coding()
})

ev.emit('meeting_end')

ev.on('after_dinner', ()=> {
  mySelf.goToGym()
})

ev.emit('after_dinner')

ev.on('in_gym', ()=> {
  mySelf.talkToCoach()
})

ev.emit('in_gym')

ev.on('training_end', ()=> {
  mySelf.stretchBody()
})

ev.emit('training_end')

ev.on('night_come', ()=> {
  mySelf.goToSleep()
})

ev.emit('night_come')

console.log('美好的一天就这样结束了')