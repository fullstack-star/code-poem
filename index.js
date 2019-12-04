let events = require('events');
let emitter = new events.EventEmitter();

class OneDay {
    constructor(day, weather, name) {
        this.day = day;
        this.weather = weather;
        this.name = name;
        this.requirementList = [];
    }
    receiveRequirement(requirement, deadline) {
        this.requirementList.push({
            id: requirement.id,
            detail: requirement.detail,
            deadline: deadline
        })
    }
    finishRequirement(id) {
        let index = requirementList.findIndex(e => e.id == id)
        if (index > -1) {
            this.requirementList.splice(index, 1);
        }
    }
}

const DATE = new Date(2019, 6, 21);
const WEATHER = "sunny";
const NAME = "lpp";
const lppOneDay = new OneDay(DATE, WEATHER, NAME);

emitter.on('receiveRequirement', function (requirement, deadline) {
    lppOneDay.receiveRequirement(requirement, deadline)
});

emitter.on('finishRequirement', function (id) {
    lppOneDay.finishRequirement(id)
});

emitter.emit('receiveRequirement', {
    id: 1,
    detail: 'fixbug1',
}, '2019.6.21 10:00:00');
emitter.emit('receiveRequirement', {
    id: 2,
    detail: 'fixbug2',
}, '2019.6.21 12:00:00');