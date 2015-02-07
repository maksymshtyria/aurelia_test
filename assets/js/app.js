
export class ToDo{
  //static metadata(){
  //  return Behavior
  //      .templateController('repeat')
  //}

  constructor(project){
    this.projects = [{
      id: 1,
      title: "First priority",
      tasks: [{
        status: "done",
        title: "create this exaple",
        date: new Date().toString()
      }, {
        status: "in progress",
        title: "create presentation",
        date: new Date().toString()
      }, {
        status: "new",
        title: "led presentation",
        date: new Date().toString()
      }]
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