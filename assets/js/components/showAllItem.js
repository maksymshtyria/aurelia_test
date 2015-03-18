import {Behavior} from 'github:aurelia/templating@0.8.8';
import {HttpClient} from 'aurelia-http-client';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Item} from './item';



export class ShowAllItem extends Item {
    static metadata(){
        //return Behavior.useShadowDOM();
        return Behavior.withProperty('projects').withProperty('item');
    }

    static inject() { return [HttpClient, EventAggregator]; }

    constructor(http, eventAggregator){
        this.item = {id:"showAll"};
        super(null, eventAggregator)
    }
    select() {
        this.eventAggregator.publish('select:item', {id: this.item.id});
        this.eventAggregator.publish('showAll', {id: this.item.id});
    }
}