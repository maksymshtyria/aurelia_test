import {Behavior} from 'github:aurelia/templating@0.8.8';
import {HttpClient} from 'aurelia-http-client';



export class Project {
    static metadata(){
        //return Behavior.useShadowDOM();
        return Behavior.withProperty('project');
    }

    static inject() { return [HttpClient]; }
    constructor(http){
        this.http = http;
        this.newTask = {};
    }

    addTask () {
        console.log(this.status);
        console.log(this.title);
        this.http.put('projects/' + this.project.id, this.newTask)
        this.project.tasks.push({
            status: this.status,
            title: this.title,
            date: new Date().toString()
        })

    }
}