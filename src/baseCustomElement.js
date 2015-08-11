export class BaseCustomElement
{
	constructor(element){
		this.element = element;
	}

    attachingTemplate(template){
        return template;
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
