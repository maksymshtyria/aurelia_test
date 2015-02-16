import {Behavior} from 'github:aurelia/templating@0.8.8';
import {HttpClient} from 'aurelia-http-client';
import {EventAggregator} from 'aurelia-event-aggregator';

export class Project {
    //static metadata(){
    //    //return Behavior.useShadowDOM();
    //    return Behavior.withProperty('selected', 'valueChanged', 'show');
    //}

    static inject() { return [HttpClient, EventAggregator]; }
    constructor(http, eventAggregator){
        this.http = http;
        this.selected = true;
        this.newTask = {};
        //this.project = {tasks: []};
        this.eventAggregator = eventAggregator
        //this.eventAggregator.subscribe('select:item', data => {
        //    this.selected = this.id === data.id;
        //});
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