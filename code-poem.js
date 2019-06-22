const EventEmitter = require('events').EventEmitter;
const event = new EventEmitter();
const Breakfast;

const DATE = new Date('2019/06/22 09:06:00');
const LOCATION = 'Guangzhou';
const WEATHER = 'fine';
const breakfastFoods = ['two buns', 'a cup of soy milk'];

const myBreakfast = new Breakfast();

event.on('eat-breakfast', (breakfast) => {
    breakfast.eat();
});

// 写了这么久，总算吃上早餐了
event.emit('eat-breakfast', myBreakfast);