declare module 'asan' {
  export class BaseCustomElement {
    constructor(element: any);
    attachingTemplate(template: any): any;
    attachedTemplate(): any;
    query(sel: any): any;
    queryAll(sel: any): any;
  }
}