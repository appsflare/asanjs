export class BaseCustomElement
{
	constructor(element){
		this.element = element;
	}

	query(sel){
		return this.element.querySelector(sel);
	}

	queryAll(sel){
		return this.element.querySelectorAll(sel);
	}
}
