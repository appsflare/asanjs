declare module 'asan' {
  import xtag from 'asan/xtag';
  import { ControllerConnector }  from 'asan/controllerConnector';
  export class Registry {
    static register(tagName: any, controllerType: any, options: any): any;
    static create(tagName: any): any;
  }
}