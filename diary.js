class Daily {
    constructor(name) {
        this.name = name
    }
    wake() {
        console.log(`早上，${this.name}起床了`)
    }
    walk() {
        console.log(`${this.name}走路`)
    }
    work() {
        console.log(`${this.name}工作`)
    }

    eat(type) {
        console.log(`${this.name}吃${type}饭`)
    }

    exercise() {
        console.log(`${this.name}在运动`)
    }

    sleep() {
        console.log(`晚上，${this.name}睡觉`)
    }
}

class HeadLine {
    constructor(date, location, weather) {
        this.date = date
        this.location = location
        this.weather = weather
    }
    headDaily() {
        console.log(`${this.date} ${this.location} ${this.weather}:`)
    }
}

const DATE = '2019年6月22日'
const LOCATION = '北京'
const WEATER = '晴'

const headToday = new HeadLine(DATE, LOCATION, WEATER)
const me = new Daily('我')

headToday.headDaily()
me.wake()
me.eat('早')
me.walk()
me.work()
me.eat('午')
me.exercise()
me.eat('晚')
me.sleep()