class Diray {
  constructor(name) {
    this.name = name;
  }

  doSomething(something) {
    let result = ''  
    something.forEach((thing, index) => {
      if (index < something.length - 1) {
        result += `${thing}然后`
      } else {
        result += thing
      }
    });
    console.log(result)
  }

  toCompany(time, something) {
    console.log(`${time}去公司`)
    this.doSomething(something)
  }

  toRestaurant(time, something) {
    console.log(`${time}去食堂`)
    this.doSomething(something)
  }

  toHome(time, something) {
    console.log(`${time}回家`)
    this.doSomething(something)
  }
}

var myDiray = new Diray();
myDiray.toCompany('8点半', ['修bug', '修bug', '写bug']);
myDiray.toRestaurant('11点半', ['打菜', '结账', '吃饭']);
myDiray.toCompany('12点半', ['摸鱼', '刷圈', '赶task']);
myDiray.toHome('晚上8点半', ['睡觉', '学习', '洗漱', '睡觉']);
