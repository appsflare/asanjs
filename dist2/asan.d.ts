declare module 'asan' {
  import { attribute, customElement, lifeCycleEventHandler, deprecate, method, eventHandler }  from 'asanjs-decorators';
  export class BaseCustomElement {
    constructor(element: any);
    attachingTemplate(template: any): any;
    attachedTemplate(): any;
    created(): any;
    inserted(): any;
    removed(): any;
    suspend(args: any): any;
    suspending(args: any): any;
    suspended(): any;
    isSuspended(): any;
    restore(args: any): any;
    restoring(args: any): any;
    restored(args: any): any;
    query(sel: any): any;
    queryAll(sel: any): any;
  }
  export class AsanElement extends BaseCustomElement {
    constructor(element: any);
    onCreated(): any;
    onInserted(): any;
    onRemoved(): any;
    attributeChanged(): any;
    setValue(): any;
    clearValue(): any;
    makeApi(): any;
  }
}