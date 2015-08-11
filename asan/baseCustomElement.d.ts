declare module 'asan' {
  export class BaseCustomElement {
    constructor(element: any);
    query(sel: any): any;
    queryAll(sel: any): any;
  }
}