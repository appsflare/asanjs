declare module 'asan' {
  import { BaseCustomElement }  from 'asan/baseCustomElement';
  import { attribute, customElement, lifeCycleEventHandler, deprecate, method, eventHandler }  from 'asan/decorators';
  export default class AsanElement extends BaseCustomElement {
    constructor(element: any);
    created(): any;
    inserted(): any;
    removed(): any;
    attributeChanged(): any;
    setValue(): any;
    clearValue(): any;
    makeApi(): any;
  };
}