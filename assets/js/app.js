import {Behavior} from 'github:aurelia/templating@0.8.8';

export class ToDo{
  //static metadata(){
  //  return Behavior
  //      .templateController('repeat')
  //}

  constructor(){
    this.items = [{
      id: 1, date: "01"
    }, {
      id: 2, date: "02"
    }, {
      id: 3, date: "03"
    }];
    console.log(this.items)
  }

  get fullName() {
    console.log("1")
    return 1;
  }

  welcome(){
        console.log("2")

    alert(`Welcome, ${this.fullName}!`);
  }
}