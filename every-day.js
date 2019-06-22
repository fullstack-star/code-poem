/**
 * @file june 的一天活动
 * @author juneXiang(xyj_june@163.com)
 */
const EventEmitter = require('events');

const TITLE = '每日行程记录';
class EveryDay extends EventEmitter {
    constructor(options) {
        super(options);
        this.name = 'june';
        this.date = new Date().toDateString();
    }

    run() {
        console.log(`标题是：${TITLE}`);
        console.log(`作者：${this.name}`);
        console.log(`日期：${this.date}`);
        this.morningJourney();
        this.middayJourney();
        this.afternoonjJourney();
        this.nightJourney();
    }

    morningJourney() {
        super.on('morning', (...args) =>{
            console.log('上午我的行程表:');
            const list = args || [];
            list.forEach((element, index) => {
                console.log(`${index}:${element}`);
            });   
        });
    }
    middayJourney() {
        super.on('midday', (...args) =>{
            console.log('中午我的行程表:');
            const list = args || [];
            list.forEach((element, index) => {
                console.log(`${index}:${element}`);
            });   
        });
    }

    afternoonjJourney() {
        super.on('afternoon', (...args) =>{
            console.log('下午我的行程表:');
            const list = args || [];
            list.forEach((element, index) => {
                console.log(`${index}:${element}`);
            });   
        });
    }

    nightJourney() {
        super.on('night', (...args) =>{
            console.log('晚上我的行程表:');
            const list = args || [];
            list.forEach((element, index) => {
                console.log(`${index}:${element}`);
            });   
        });
    }
}
const everyDay = new EveryDay();
everyDay.run();
everyDay.emit('morning', '起床洗漱', '出门', '吃早餐', '坐公交去公司', '开始一天的工作');
everyDay.emit('midday', '吃午饭', '睡午觉');
everyDay.emit('afternoon', '冷水洗脸清醒一下', '开始下午的工作', '吃下午零食');
everyDay.emit('night', '吃晚饭', '公司花园散散步', '开始加班', '九点到九点半之间坐公交下班回家', '葛优躺一会，刷刷手机', '洗澡刷牙', '看会书');