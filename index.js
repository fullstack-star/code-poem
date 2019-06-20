/* 
 * 人生就是一本流水账
 * 千万别被那只无形的手，被动的推到人生的尽头...
 */

class Boy {
  constructor(name) {
    this.age = 0; // 年龄
    this.health = 100; // 健康
    this.wealth = 0; // 财富
    this.interests = []; // 爱好
    this.skill = []; // 技能
    console.log(`我出生了！`);
  }
  playWithNeighborhoodChildren(interests, years) {
    this.age += years;
    this.interests = interests;
    console.log(`我要去上学了！`);
    return "good bye , my childhood！";
  }
  goodGoodStudyAndDayDayUp(skills, years) {
    this.age += years;
    this.skill = skills;
    console.log(`我学习了${years}年,变成了一个青年人！`);
    return "good bye , my youth！";
  }
  workToWinFuture() {
    boy.age++;
    boy.health--;
    boy.wealth++;
    boy.skill.length++;
    console.log(`我在工作，我在变老`);
    return "I'm getting older and older！";
  }
}


// 男孩出生
var boy = new Boy(),
  neighborhoodInterests = [
    "玩弹珠",
    "玩泥巴",
    "玩火枪",
    "捉知了",
    "捉迷藏",
    "whatever"
  ],
  knowledgesInSchool = ["语文", "数学", "英语", "物理", "化学", "whatever"];

// 泥地里摸爬滚打7年载
boy.playWithNeighborhoodChildren(neighborhoodInterests, 7);
// 学校里呆了16年
boy.goodGoodStudyAndDayDayUp(knowledgesInSchool, 16);

// 参加工作了
while (boy.age < 65) {
  if (boy.age < 30) {
    boy.girlfriend = Math.random(); // 经常换
    boy.wealth--; // 花钱快
  } else if (boy.age < 40) {
    // 娶了女神之后
    boy.wife = "女神";
    delete boy.girlfriend; // 女朋友再见
    boy.interest = []; // 兴趣爱好一边放
    boy.wealth = -Infinity; // 房奴+车奴，绝望
  } else {
    // 女神管的严，行动多有不便
    try {
      boy.interest.push("");
    } catch (e) {
      boy.interest.pop();
    }
  }
  boy.workToWinFuture();
}

// 退休了
boy.interest.push("广场舞", "抱孙子", "whatever");
console.log(`我退休了，今年${boy.age}岁了`);
