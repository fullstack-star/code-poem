const DATA = new Date(2019, 6, 20);
const WEATHER = "sunny";
const LOCATION = "shenzhen";

class Dirkwei {
  constructor(name) {
    if (!Dirkwei.instance) {
      this.name = name;
      this.todoList = [];
      Dirkwei.instance = this;
    }
    return Dirkwei.instance;
  }

  cookAfterWork(food) {
    console.log(`${this.name} make ${food}`);
    return this;
  }

  addTempThingsTodo(...fncs) {
    this.todoList.push(...fncs);
  }

  finishTodoList() {
    this.todoList.forEach(task => task());
  }
}

Dirkwei.instance = undefined;

const me = new Dirkwei("dirkwei");
me.addTempThingsTodo(
  () => console.log("read PHP code"),
  () => console.log("finish my homework.")
);
me.cookAfterWork("fried dumplings").finishTodoList();
