const DATA = new Date('2019.6.20')
const wather = 'sunny'
const LOCATION = 'shenzhen'

class Phone {
  constructor(name) {
    this.name = name 
  }
  clock(mark) {
    console.log(mark)
    const ev = new CustomEvent('getUp')
    tangwenping.dispatchEvent(ev)
  }
}
class Person {
  constructor() {
    
  }
  say(something) {
    console.log(something)
  }
}
class Man extends Person {
  constructor(name) {
    super()
    this.name = name
    this.sex = '男生'
  }
}
class WoMan extends Person {
  constructor(name) {
    super()
    this.name = name
    this.sex = '男生'
  }
}

const oppoR17 = new Phone('oppoR17')
const tangwenping = new Man('唐文平')

oppoR17.addEventListener('timeAT07:20', function(e) {
  this.clock(e.detail.mark)
})

function goingByMTR (from, to) {
  new Array(500).forEach(i => {
    if (i > 200) {
      new Man(i).say('好多人哇！！！')
    } else {
      new Man(i)
    }
  })
  new Array(500).forEach(i => {
    new Woman(i).say('好多人耶！！！')
  })
  this.say('我靠，好多人！！！')
}

tangwenping.addEventListener('getUp', function() {
  setTimeout(() => {
    console.log('真的起床了')
    goingByMTR.bind(tangwenping)('qinghu', 'futian')
  }, 5 * 60 * 1000)
})


const ev = new CustomEvent("timeAT07:20", {detail:{mark: '起床啦'}})
oppoR17.dispatchEvent(ev)