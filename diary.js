/**
 * 变量：小驼峰
 * 常量：大写
 * 对象类：大驼峰
 * 函数：小驼峰
 * 布尔值：is,has,can开头
 * 私有属性：_下划线开头
 */
class MyStory {
    constructor() {
        this.years = 0;
        this.interests = [];
    }

    gotoSchool(years, interests){
        var DATEOFSCHOLL = '1997-09';
        
        this.years = years;
        this.interests = interests;
        this._printLog(`${DATEOFSCHOLL},我开始上学，经历${this.years}年学生时代，我的兴趣爱好是${this.interests.join('、')}!`)
    }

    gotoWork(years) {
        var DATEOFWORK = '2017-04';
        
        this.years = years;
        this._printLog(`${DATEOFWORK},我开始工作，工作了${this.years}年。I believe that future will be better and better!`)
    }

    _printLog(str) {
        console.log(`${str}`)
    }
}

var myStory = new MyStory();
myStory.gotoSchool(20, ['绘画','手工制作']);
myStory.gotoWork(2);