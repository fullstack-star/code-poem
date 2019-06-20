class Dairy {
    constructor(date,weather,content) {
        this.date = date;
        this.weather = weather;
        this.content = content;
        this._clear = clearDairy.bind(this);
    }
    printDairy () {
        console.log(this.date);
        console.log(this.weather);
        console.log(this.content);
    }
    addClearEvent () {
        document.addEventListener('click', this._clear, false);
    }
    removeClearEvent () {
        document.removerEventListener('click', this._clear,  false);
    }
}

let date = '2019-06-20';
let weather = 'rainy';
let content  = 'it is a rainyday,and i am so upset.' 

let newDairy = new Dairy(date,weather,content);
newDairy.printDairy();


function clearDairy(dairy){
    dairy.date = '';
    dairy.weather = '';
    dairy.content = '';
}