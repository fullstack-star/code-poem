/**
 * 马上就要回家领证了 用代码检查下 是否能成功领证
 */

// 一些常量
const AIM = '成功领证';
const PROPTIOUSTIME = new Date('2019/6/24');

// 人类
class People {
    // sex: number; // 0 女 1 男 2 其他
    // age: number;
    // hasIdentityCard: boolean;
    // hasHouseholdRegister: boolean;

    constructor(sex, age, hasIdentityCard, hasHouseholdRegister) {
        this.sex = sex;
        this.age = age;
        this.hasIdentityCard = hasIdentityCard;
        this.hasHouseholdRegister = hasHouseholdRegister;

        this._log();
    }

    _log() {
        console.log(`一个${this.sex ? '男' : '女'}人被创建了`)
    }
}

// 检查是否符合条件
let marriageConditions = (people) => {
    const result = {
        isThrough: true,
        mes: ''
    };
    
    // 判断年龄
    switch (people.sex) {
        case 0:
            if (people.age < 20) {
                result.isThrough = false;
                result.mes = '女方年龄未达标';
                return result;
            }
            break;
        case 1:
            if (people.age < 22) {
                result.isThrough = false;
                result.mes = '男方年龄未达标';
                return result;
            }
            break;
        default:
            result.isThrough = false;
            result.mes = '无法识别的性别';
            return result;
    }
    
    // 是否有身份证
    if (!people.hasIdentityCard) {
        result.isThrough = false;
        result.mes = `${this.sex ? '男' : '女'}方忘记携带身份证`;
        return result;
    }

    // 是否有户口本
    if (!people.hasHouseholdRegister) {
        result.isThrough = false;
        result.mes = `${this.sex ? '男' : '女'}方忘记携带户口本`;
        return result;
    }

    // 判断是否过了日期
    if (PROPTIOUSTIME.getTime() < (new Date()).getTime()) {
        result.isThrough = false;
        result.mes = `对不起，您错过了婚期`;
        return result;
    }

    // 返回检测结果
    return result;
};

// 创造男方
const man = new People(1, 25, true, true);

// 创造女方
const woman = new People(0, 26, true, true);


// 结果
const testManResult = marriageConditions(man);
const testWomanResult = marriageConditions(woman);

if (testManResult.isThrough && testWomanResult.isThrough) {
    console.log(AIM);
} else {
    console.error(testManResult.mes || testWomanResult.mes);
}
