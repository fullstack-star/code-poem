/**
 * @Author: FunnyTedZhao 
 * @Date: 2019-06-22 10:04:43 
 * @Last Modified by: FunnyTedZhao
 * @Last Modified time: 2019-06-22 11:45:55
 */

/**
 * 日记类
 * @class Diary
 */
class Diary {
  constructor (day, isOvertime = false) {
    this.day = day
    this.isWork = (this.day > 0 && this.day < 6) ? true : (isOvertime ? true : false)
  }

  /**
   * 起床函数
   * @function getUP
   * @param {Boolean} isOvertime 
   */
  getUP () {
    const _wakeUpTime = this.isWork ? '闹钟响了' : '自然醒了'
    document.write(`${_wakeUpTime}，我该起床了！</br>`)
  }

  /** 
   * 上班函数
   * @function goToWork
   */
  goToWork (askForLeave = null) {
    const _reasons = ['病假', '事假', '年假', '调休']
    this.isWork = _reasons.includes(askForLeave) ? false : true
    const _doSomething = this.isWork ? '身体健康，吃嘛嘛香！好好上班，努力挣钱！' : '有些事情，请假一天。好好休息，调整身心！'
    document.write(`${_doSomething}</br>`)
  }
}
