import { BaseCustomElement } from 'asan';
import template from './my-input.html!text';
import { attribute, customElement, lifeCycleEventHandler, deprecate, method, eventHandler } from 'asanjs-decorators';

@customElement('my-input',{ template:template})
export default class ExtendedInput extends Asan.BaseCustomElement {

  constructor(element) {
   super(element);
  }

  @lifeCycleEventHandler()
  created() {
    // fired once at the time a component
    // is initially created or parsed
    console.log('my-input created: OK');
  }

  @lifeCycleEventHandler()
  inserted() {
    // fired each time a component
    // is inserted into the DOM
      console.log('my-input inserted: OK');
  }

  @lifeCycleEventHandler()
  removed() {
    // fired each time an element
    // is removed from DOM
    console.log('my-input removed: OK');
  }

  @lifeCycleEventHandler()
  attributeChanged() {
    // fired when attributes are set
  }

  @eventHandler('click:delegate(button)')
  setValue(){
    this.query('#input').value = "Bah blah...";
  }

  @eventHandler('click:delegate(#clear)')
  clearValue(){
    this.query('#input').value = "";
  }

 @method()
  makeApi(){

  }


}
