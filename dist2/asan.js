import {attribute,customElement,lifeCycleEventHandler,deprecate,method,eventHandler} from 'asanjs-decorators';

export class BaseCustomElement {
    constructor(element) {
        this.element = element;
        this.__active = true;
    }

    attachingTemplate(template) {
        return Promise.resolve(template);
    }

    attachedTemplate() {

    }



    suspend() {
        return this.suspending()
            .then(val => {
                this.__active = val;
                this.suspended();
            });
    }

    suspending() {
        return Promise.resolve(true);
    }

    suspended() {

    }

    query(sel) {
        return this.element.querySelector(sel);
    }

    queryAll(sel) {
        return this.element.querySelectorAll(sel);
    }
}
@customElement('asan-element',{ template:'<span>Hi, I am element asan!!!</span>'})
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
