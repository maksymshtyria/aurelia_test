import {HttpClient} from 'aurelia-http-client';
import {Router} from 'aurelia-router';

export class App{
  //static metadata(){
  //  return Behavior
  //      .templateController('repeat')
  //}

    //static metadata(){ return Metadata.transient(); }
  static inject() { return [HttpClient, Router]; }

  constructor(http, router){
    http.get('projects').then(param => {
        this.projects = JSON.parse(param.response);
    });

      this.router = router;
      this.router.configure(config => {
          config.title = 'ToDo';
          config.map([
              { route: [''],               moduleId: './home/index' },
              { route: 'a/:id',               moduleId: './components/item' , href:'#files',   nav: true},
              { route: 'files*path',       moduleId: './files/index',     href:'#files',   nav: true }
          ]);
      });

    this.projects = [];
  }
}

