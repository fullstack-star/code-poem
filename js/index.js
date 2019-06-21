//记录2019-06-20
const TODAY = '2019-06-20';
const CITY = 'Hangzhou';
const WEATHER = 'rainy';
const NAME = 'Dory'

class Dairy {
	constructor(name,weather,city,today){
		this.name = name;
		this.weather = weather;
		this.city = city;
		this.today = today;
		this.knowledgeLists = [];
		console.log(`${this.name} is in ${this.city},today is ${this.today}`);
	}
	eatFood(food,time,isCook){
		if(isCook){
			console.log(`${this.name} cooked ${food}`);
		}
		console.log(`${this.name} eated ${food} at ${time}`);
	}
	useTransportation(tool,time,destination){
		console.log(`${this.name} go to ${destination} by ${tool} at ${time}`);
		if(this.weather === 'rainy' || this.weather === 'snowy'){
			console.log(`What a fuck weather, it is ${this.weather}`);
		}
	}
	workInCompany(startTime,endTime){
		console.log(`${this.name} worked form ${startTime} to ${endTime}`);
	}
	doOtherThings(thing,time,isStudy){
		if(isStudy && time.substring(0,2)<=23){
			this._study(thing,time);
		}else{
			console.log(`${this.name} did ${thing} at ${time}`);
		}
	}
	_study(thing,time){
		console.log(`${this.name} studied ${thing} at ${time}`);
		this.knowledgeLists.push(thing);
	}
}

var myDairy = new Dairy(NAME,WEATHER,CITY,TODAY)

myDairy.eatFood('milk', '8:00',false);
myDairy.useTransportation('motorbike', '8:10','conpany');
myDairy.workInCompany('8:30','18:00')
myDairy.eatFood('pork', '12:00',false);
myDairy.useTransportation('motorbike', '18:10','home');
myDairy.eatFood('chicken', '19:30',true);
myDairy.doOtherThings('homework', '20:30');
myDairy.doOtherThings('web', '21:30',true);