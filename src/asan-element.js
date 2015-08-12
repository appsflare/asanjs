import { BaseCustomElement } from './baseCustomElement';
import  { attribute, customElement, lifeCycleEventHandler, deprecate, method, eventHandler } from 'asanjs-decorators';


@customElement('asan-element',{ template:'Hi, I am element asan!!!'})
export class AsanElement extends BaseCustomElement {

  constructor(element) {
   super(element);
  }

  @lifeCycleEventHandler()
  created() {
    // fired once at the time a component
    // is initially created or parsed

  }

  @lifeCycleEventHandler()
  inserted() {
    // fired each time a component
    // is inserted into the DOM

  }

  @lifeCycleEventHandler()
  removed() {
    // fired each time an element
    // is removed from DOM

  }

  @lifeCycleEventHandler()
  attributeChanged() {
    // fired when attributes are set
  }

  @eventHandler('click:delegate(button)')
  setValue(){
    //this.query('#input').value = "Bah blah...";
  }

  @eventHandler('click:delegate(#clear)')
  clearValue(){
    //this.query('#input').value = "";
  }

 @method()
  makeApi(){

  }


}
