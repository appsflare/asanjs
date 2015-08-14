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
