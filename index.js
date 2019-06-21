/**
 * 使用代码来写日记
 * 变量： 小驼峰
 * 类： 大驼峰
 * 常量: 大写
 * 事件名: 小写 + ‘-’ 隔开
 */

let MyEmitter = require("events")

const NOW_TIME = '2019-06-21 22:30'
const WEATHER = 'rain'
const MOOD = 'general'
const TASK_EVALUATION = {
  BAD: '完成的不好，需要加油哦！！！',
  GOOD: '完成的很不错，再接再厉~',
}

class OneDay extends MyEmitter {
  constructor() {
    super()
    this.tasks = []
    this.addListener('start', (wakeUpTime) => {
      this.wakeUpTime = wakeUpTime
    })
    this.addListener('end', () => {
      this._printTasks()
    })
  }

  doSomeThing(taskDesc, duration, score) {
    let taskObj = this._getTaskObj(taskDesc, duration, score)
    this.tasks.push(taskObj)
  }

  _printTasks() {
    console.log(`---- 起床时间 ${this.wakeUpTime}`)
    console.log(`---- 今天一共做了 ${this.tasks.length} 件事。以下是事情的描述和总结：`)
    this.tasks.forEach((taskObj) => {
      console.log("\n====================")
      console.log(`事情描述： ${taskObj.desc}`)
      console.log(`事情打分： ${taskObj.score}`)
      console.log(`事情总结： ${taskObj.conclusion}`)
      console.log("====================")
    })
  }

  _getTaskObj(theTaskDesc, duration, score) {
    let threshold = 2
    let theTaskObj = {
      desc: theTaskDesc,
      score,
      conclusion: score / duration >= threshold ? TASK_EVALUATION.GOOD : TASK_EVALUATION.BAD,
    }
    return theTaskObj
  }
}


let myDay = new OneDay()
myDay.emit("start", "07:00")
myDay.doSomeThing("看《javascript高级程序设计》", 1, 3)
myDay.doSomeThing("解决今天的第一个bug", 1, 4)
myDay.doSomeThing("开周五周会", 2, 1)
myDay.doSomeThing("健身", 1.5, 5)
myDay.emit("end")
