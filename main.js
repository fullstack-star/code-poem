class Diary {
  constructor(ctx) {
    const context = {
      name: 'Hero',
      age: 16,
      sexy: 'MALE',
      location: 'Beijing',
      date: Date.now(),
      actions: []
    }

    Object.assign(context, ctx)
    Object.keys(context).map(key => {
      this[key] = context[key]
    })
  }

  init() {
    this.diaryTitle()
    this.eat('Eat Breakfast at', '7:00')
    this.workout('Do fitness at', '8:00')
    this.reading('Reading Next.js official website at', '8:00')
    this.travel('Travel at Weekend')
    this.execActions()
  }

  diaryTitle() {
    window.console.log(
      '%c%s',
      'padding:0 10px; color: #4688f1; background: #fff; font-size: 18px;',
      this.name + '\'s diary'
    )
  }

  eat(food, time) {
    this._print(food, time)
  }

  reading(book, time) {
    this._print(book, time)
  }

  workout(content, time) {
    this._print(content, time)
  }

  coding(code, time) {
    this._print(code, time)
  }

  travel(destination, time) {
    this._print(destination, time)
  }

  execActions() {
    if (!this.actions.length) return
    this.actions.map(action => {
      Object.prototype.toString.call(action) === 'object Function' ? action() : null
    })
  }

  _print(content, time) {
    if (!content) return
    console.log(content, time && time instanceof Date ? new Date(time) : time ? time : '');
  }

}

const context = {
  name: 'Alex',
  age: 18,
  sexy: 'FEMALE',
  location: 'Beijing'
}
const myDiary = new Diary(context)
myDiary.init()