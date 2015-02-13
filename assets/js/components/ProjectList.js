import {Behavior} from 'github:aurelia/templating@0.8.8';
import {HttpClient} from 'aurelia-http-client';
import {EventAggregator} from 'aurelia-event-aggregator';



export class ProjectList {
    static metadata(){
        //return Behavior.useShadowDOM();
        return Behavior.withProperty('projects');
    }

    static inject() { return [HttpClient, EventAggregator]; }

    constructor(http, eventAggregator){
        this.eventAggregator = eventAggregator;
        this.http = http;
        this.projects = [];
    }

    select(id) {
        console.log(id);
    }

    publish(){
        var payload = {}; //any object
        this.eventAggregator.publish('channel name here', payload);
    }

    subscribe(){
        this.eventAggregator.subscribe('select:item', data => {
            this.active = true;
        });
    }
}