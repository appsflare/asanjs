export class BaseCustomElement
{
	constructor(element){
		this.element = element;
	}

    attachingTemplate(template){
        return new Promise((resolve,reject)=> resolve(template));
    }

    attachedTemplate(){

    }

	query(sel){
		return this.element.querySelector(sel);
	}

	queryAll(sel){
		return this.element.querySelectorAll(sel);
	}
}
