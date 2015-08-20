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
