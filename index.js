const PRICE_MAP = Object.freeze({
  '鸡蛋': 1,
  '香蕉': 2,
  '苹果': 3,
  '拉面': 20
})

function wakeUpByAlarm(clockTime) {
  console.log("起床时间：" + clockTime);
}

function buyFoodAndEat(shopList = []) {
  shopList.forEach(food => {
    if (PRICE_MAP[food]) {
      console.log(`花费了${PRICE_MAP[food]}元吃了一份${food}`)
    }
  })
}
class Work {
  constructor() {
    console.log("开始一天新的工作")
  }
  pause() {
    console.log("暂停一下手头工作")
  }
  continue () {
    console.log("继续手头工作")
  }
  finish() {
    console.log(`完成今天工作，赚得${this._getPay()}元`)
  }
  _getPay() {
    return 100;
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

(async function main() {
  wakeUpByAlarm("8点30分");
  let foodForBreakfast = ['鸡蛋', '香蕉'];
  buyFoodAndEat(foodForBreakfast);
  let todayWork = new Work();
  todayWork.pause();
  let foodForLunch = ['拉面']
  buyFoodAndEat(foodForLunch)
  todayWork.continue();
  todayWork.finish();
})()
