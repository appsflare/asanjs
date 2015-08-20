import {attribute,customElement,lifeCycleEventHandler,deprecate,method,eventHandler} from 'asanjs-decorators';

export class BaseCustomElement {
    constructor(element) {
        this.element = element;
        this.__suspended = false;
    }

    processingTemplate(template) {
        return Promise.resolve(template);
    }

    attachingTemplate(template) {
        return Promise.resolve(template);
    }

    attachedTemplate() {

    }

    created(){

    }

    inserted(){

    }

    removed(){

    }


    suspend(args) {
        return this.suspending()
            .then(val => {
                this.__suspended = val;
                if (this.isSuspended()) {
                    let state = this.__suspension = {
                        parent: this.element.parentNode,
                        element: this.element,
                        holder: document.createComment('element suspended')
                    };
                    state.parent.replaceChild(state.holder, state.element);
                    this.suspended(args);
                }
            });
    }

    suspending(args) {
        return Promise.resolve(true);
    }

    suspended() {

    }

    isSuspended() {
        return this.__suspended;
    }

    restore(args) {
        return this.restoring(args)
            .then(val => {
                this.__suspended = !val;
                if (!this.isSuspended()) {
                    if (!this.element.parentNode && this.__suspension) {
                        this.__suspension.parent.replaceChild(this.__suspension.element, this.__suspension.holder);
                        this.__suspension = undefined;
                        this.restored(args);
                    }
                }
            });
    }

    restoring(args) {
        return Promise.resolve(true);
    }

    restored(args) {

    }

    query(sel) {
        return this.element.querySelector(sel);
    }

    queryAll(sel) {
        return this.element.querySelectorAll(sel);
    }
}

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
