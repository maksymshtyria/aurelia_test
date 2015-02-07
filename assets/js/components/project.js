import {Behavior} from 'github:aurelia/templating@0.8.8';


export class Project {
    static metadata(){
        //return Behavior.useShadowDOM();
        return Behavior.withProperty('project');
    }
    constructor(){
    }

    addTask () {
        console.log(this.status);
        console.log(this.title);
        this.project.tasks.push({
            status: this.status,
            title: this.title,
            date: new Date().toString()
        })
    }
}