import {HttpClient} from 'aurelia-http-client';

export class Index {
    static inject() { return [HttpClient]; }

    constructor(http){
        http.get('projects').then(param => this.projects = JSON.parse(param.response));

        this.projects = [];
    }
}