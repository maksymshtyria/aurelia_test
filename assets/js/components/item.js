import {Behavior} from 'github:aurelia/templating@0.8.8';
import {HttpClient} from 'aurelia-http-client';
import {EventAggregator} from 'aurelia-event-aggregator';



export class Item {
    static metadata(){
        //return Behavior.useShadowDOM();
        return Behavior.withProperty('item');
    }

    static inject() { return [HttpClient, EventAggregator]; }

    constructor(http, eventAggregator){
        this.eventAggregator = eventAggregator;
        this.http = http;
        this.className = "list-group-item";
        this.subscribe();
        console.log(this.item)
    }

    select() {
        this.eventAggregator.publish('select:item', {id: this.item.id});
        return this;
    }

    subscribe(){
        this.eventAggregator.subscribe('select:item', data => {
            if (this.item.id === data.id) {
                this.className += " active";
                this.item.show = true;
            } else {
                this.className = "list-group-item";
                this.item.show = false;
            }
        });
    }
}