declare module 'asan' {
  import { attribute, customElement, lifeCycleEventHandler, deprecate, method, eventHandler }  from 'asanjs-decorators';
  export class BaseCustomElement {
    constructor(element: any);
    attachingTemplate(template: any): any;
    attachedTemplate(): any;
    query(sel: any): any;
    queryAll(sel: any): any;
  }
  export class AsanElement extends BaseCustomElement {
    constructor(element: any);
    created(): any;
    inserted(): any;
    removed(): any;
    attributeChanged(): any;
    setValue(): any;
    clearValue(): any;
    makeApi(): any;
  }
}