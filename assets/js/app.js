import {HttpClient} from 'aurelia-http-client';

export class ToDo{
  //static metadata(){
  //  return Behavior
  //      .templateController('repeat')
  //}

  static inject() { return [HttpClient]; }

  constructor(http){
    http.get('projects').then(param => {this.projects = JSON.parse(param.response)})

    this.projects = [];
  }
}