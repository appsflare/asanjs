import {BaseCustomElement} from './baseCustomElement';
import {attribute, customElement, lifeCycleEventHandler, deprecate, method, eventHandler} from 'asanjs-decorators';


@customElement('asan-element', {
    template: '<span>Hi, I am element asan!!!</span>'
})
export class AsanElement extends BaseCustomElement {

    constructor(element) {
        super(element);
    }

    @lifeCycleEventHandler('created')
    onCreated() {
        // fired once at the time a component
        // is initially created or parsed
        console.log('asan-element created: OK');
    }

    @lifeCycleEventHandler('inserted')
    onInserted() {
        // fired each time a component
        // is inserted into the DOM
        console.log('asan-element inserted: OK');
    }

    @lifeCycleEventHandler('removed')
    onRemoved() {
        // fired each time an element
        // is removed from DOM
        console.log('asan-element removed: OK');
    }

    @lifeCycleEventHandler()
    attributeChanged() {
        // fired when attributes are set
        console.log('asan-element some attribute has been changed: OK');
    }

    @eventHandler('click:delegate(button)')
    handleClick() {
        //this.query('#input').value = "Bah blah...";
        console.log('asan-element some button inside me has been clicked: OK');
    }

    @method()
    checMe() {
        alert("Boom!!!, Yeah.... I've been checked. Happy checking!!!");
    }


}
