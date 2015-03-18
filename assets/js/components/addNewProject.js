import {HttpClient} from 'aurelia-http-client';
import {EventAggregator} from 'aurelia-event-aggregator';

export class AddNewProject{
    //static metadata(){
    //  return Behavior
    //      .templateController('repeat')
    //}

    //static metadata(){ return Metadata.transient(); }
    static inject() { return [HttpClient, EventAggregator]; }

    constructor(http, eventAggregator){
        this.http = http;
        this.eventAggregator = eventAggregator;
    }

    addNewProject () {
        this.http.post("projects", {title: this.newProjectName}).then(data => {
            this.eventAggregator.publish("addNewProject", data);
            this.newProjectName = ""
        });
    }
}

