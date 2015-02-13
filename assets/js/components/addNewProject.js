import {HttpClient} from 'aurelia-http-client';

export class AddNewProject{
    //static metadata(){
    //  return Behavior
    //      .templateController('repeat')
    //}

    //static metadata(){ return Metadata.transient(); }
    static inject() { return [HttpClient]; }

    constructor(http){
    }
}

