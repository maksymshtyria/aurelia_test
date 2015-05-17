import {Router} from 'aurelia-router';
import {Behavior} from "github:aurelia/framework@0.8.6";

export class App{
  static inject() { return [Router]; }

  constructor(router){
      this.router = router;
      this.router.configure(config => {
          config.title = 'ToDo';
          config.map([
              { route: ['', 'projects'],          moduleId: './components/index',  nav: true, title: "projects" },
              { route: 'projects/:id',            moduleId: './components/navbar' ,  nav: true} // TODO should be refactored
          ]);
          config.mapUnknownRoutes(instruction => {
                console.log(arguments)
          });
      });
  }
}

