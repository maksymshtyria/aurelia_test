export class Test{
    //static metadata(){
    //  return Behavior
    //      .templateController('repeat')
    //}

    //static metadata(){ return Metadata.transient(); }
    static inject() { return [HttpClient, Router]; }

    constructor(http, router){
        console.log("test")

    }
}

