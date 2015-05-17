import {Behavior} from 'github:aurelia/templating@0.8.8';
import {HttpClient} from 'aurelia-http-client';
import {EventAggregator} from 'aurelia-event-aggregator';

export class Project {
    //static metadata(){
    //    return Behavior.useShadowDOM();
    //}

    static metadata(){ return Behavior.withProperty('project');}

    static inject() { return [HttpClient, EventAggregator, Element]; }
    constructor(http, eventAggregator, element){
        this.http = http;
        this.element = element;
        this.show = true;
        this.newTask = {};
        this.eventAggregator = eventAggregator
        this.eventAggregator.subscribe('select:item', data => {
            this.selected = this.id === data.id;
        });
        this.newTask = this.getDefaultTask();
        this.eventAggregator = eventAggregator;
        this.eventAggregator.subscribe('showAll', data => this.isSaving = true);
        this.eventAggregator.subscribe('select:item', data => this.isSaving = this.project.id === data.id);
    }

    getDefaultTask () {
        return {
            status: "off",
            title:  "",
            date:   new Date().toString()
        }
    }

    addTask () {
        console.log(this.status);
        console.log(this.title);
        this.http.put('projects/' + this.project.id, this.newTask);
        this.project.tasks.push(Object.create(this.newTask));
        this.newTask = this.getDefaultTask()
    }
}