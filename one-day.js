/**
 * 正常工作的一天
 * @class OneDay
 * @constructor
 * @param{String} name
 * @param{Date} date
 */
class OneDay {
  constructor(name, date) {
    this.name = name;
    this.date = date;
  }

  // 起床
  wakeUp() {
    console.log('起床啦，开始一天的工作');
  }

  // 吃饭
  eat(name) {
    console.log(`去吃${name}啦`);
  }

  // 通勤
  commute(from, to) {
    console.log(`从${from}到${to}啦`)；
  }

  // 开始工作啦
  work(workName) {
    console.log(`开始做${work}工作啦`);
  }

  // 业余生活
  doLeisureActivity(activity) {
    console.log(`开始${activity}`);
  }

  // 睡觉啦
  sleep() {
    console.log('睡觉啦');
  }
}

const DATE = new Date(2019, 6, 22);

let yyl = new OneDay('yyl', DATE);

yyl.wakeUp();
yyl.eat('早饭');
yyl.commute('家', '公司');
yyl.addWork('work 1');
yyl.eat('午饭');
yyl.work('work 2');
yyl.commute('公司', '家');
yyl.doLeisureActivity('打羽毛球');
yyl.sleep();
