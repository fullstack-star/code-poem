class OrdinaryWorkingDay {
  constructor(date, name) {
    this.date = date
    this.name = name
  }

  goOutReady(time = '8:00') {
    console.log(`刷牙洗脸穿衣打扮`)
    console.log(`${time}之前出门`)
  }

  commute(isGoToWork = true) {
    if (isGoToWork) {
      console.log(`坐地铁再转公交`)
    } else{
      console.log(`坐公交再转地铁`)
    }
  }

  eating(time) {
    console.log(`${time}吃饭`)
  }

  working() {
    console.log(`coding`)
    Math.random() > .5 || console.log(`发呆`)
  }

  enjoyNightLife() {
    console.log(`刷剧刷微博闲聊发呆就是不想睡`)
  }
  goSlepping() {
    console.log(`上床睡觉`)
  }
}


const today = new Date()
const myBoringDay = new OrdinaryWorkingDay(today, 'Derrick')
myBoringDay.goOutReady('8:00')
myBoringDay.commute()
myBoringDay.eating('9:00')
let i = 0
while(i < 3) {
  myBoringDay.working()
  i++
}
myBoringDay.eating('12:00')
i = 0
while(i < 5) {
  myBoringDay.working()
  i++
}
myBoringDay.commute(false)
myBoringDay.eating('20:00')
myBoringDay.enjoyNightLife()
myBoringDay.goSlepping()
