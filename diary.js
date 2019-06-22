class Diary {
  constructor ({date, location, weather}) {
    this.date = date
    this.location = location
    this.weather = weather
    this.list = []
  }

  wakeUp (time) {
    console.log(`wakeUp at ${time}`)
    this.list.push({
      item: 'wakeUp',
      time: time,
    })
  }

  haveBreakfast (time) {
    console.log(`haveBreakfast at ${time}`)
    this.list.push({
      item: 'haveBreakfast',
      time: time,
    })
  }

  doPartTimeWork (time) {
    console.log(`doPartTimeWork at ${time}`)
    this.list.push({
      item: 'doPartTimeWork',
      time: time,
    })
  }

  haveLunch (time) {
    console.log(`haveLunch at ${time}`)
    this.list.push({
      item: 'haveLunch',
      time: time,
    })
  }

  haveSiesta (time) {
    console.log(`haveSiesta at ${time}`)
    this.list.push({
      item: 'haveSiesta',
      time: time,
    })
  }

  attendClass (time) {
    console.log(`attendClass at ${time}`)
    this.list.push({
      item: 'attendClass',
      time: time,
    })
  }

  haveDinner (time) {
    console.log(`haveDinner at ${time}`)
    this.list.push({
      item: 'haveDinner',
      time: time,
    })
  }
  studyAndSumUp (time) {
    console.log(`studyAndSumUp at ${time}`)
    this.list.push({
      item: 'studyAndSumUp',
      time: time,
    })
  }

  goToBed (time) {
    console.log(`goToBed at ${time}`)
    this.list.push({
      item: 'goToBed',
      time: time,
    })
  }

  sleep (time) {
    console.log(`sleep at ${time}`)
    this.list.push({
      item: 'sleep',
      time: time,
    })
  }
}

const yesterday = new Diary({
  date: '2019年6月21日',
  location: '中国传媒大学',
  weather: '晴',
})

yesterday.wakeUp('8:00 AM')
yesterday.haveBreakfast('8:30 AM')
yesterday.doPartTimeWork('9:30 AM')
yesterday.haveLunch('11:30 AM')
yesterday.haveSiesta('12:30 PM')
yesterday.attendClass('3:30 PM')
yesterday.haveDinner('6:30 PM')
yesterday.studyAndSumUp('8:30 PM')
yesterday.goToBed('10:30 PM')
yesterday.sleep('11:30 PM')

console.log(yesterday.list)
