export default class NoteBook {
  constructor (props) {
    const {pages, type} = props;
    this._bookTotalPages = pages;
    this._bookType = type;
    this.logs = [];
  }

  init (author, bookName) {
    this._noteBookCreateDate = Date.now ();
    this._author = author;
    this._bookName = bookName;
    this.contexts = [];
  }

  /**
   * add new context
   * @param {title,date,content,weather} params 
   */
  addContext (params) {
    this.contexts.push (params);
    this._addLog (params);
  }

  _addLog (params) {
    const {title, date} = params;
    const log = `${this._author} add an article 「${title}」 to ${this._bookName} at ${date}`;
    this.logs.push (log);
  }

  showHistory () {
    console.log (this.logs);
    return this.logs;
  }
}
