class Person {
	constructor(name) {
		this.name = name
	}
	walk() {
		console.log(`${this.name}在走路`)
	}
	work() {
		console.log(`${this.name}在工作`)
	}
	sleep() {
		console.log(`${this.name}在睡觉`)
	}
	eat() {
		console.log(`${this.name}在吃饭`)
	}
	study() {
		console.log(`${this.name}在学习`)
	}
	exercise() {
		console.log(`${this.name}在运动`)
	}
}

class Mobike {
	constructor() {
		this.name = '摩拜单车'
	}
	ride(userName) {
		console.log(`${userName}在骑单车`)
	}
}

const DATE = new Date(2019, 6, 21)
const WEATER = '多云'
const LOCATION = '广州'

const me = new Person('我')
const bike = new Mobike()

me.walk()
bike.ride(me.name)
me.work()
me.eat()
me.study()
me.exercise()
me.sleep()
