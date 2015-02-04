import {Test} from './test/test'
import {nav} from './test/navbar'

export class Welcome{
  constructor(){
    this.heading = 'Welcome to the Aurelia Navigation App!';
    this.firstName = 'John';
    this.lastName = 'Doe';
  }

  get fullName() {
    console.log("1")
    return 1;
  }

  welcome(){
        console.log("2")

    alert(`Welcome, ${this.fullName}!`);
  }
}