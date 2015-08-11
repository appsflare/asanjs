declare module 'asan' {
  export class ControllerConnector {
    constructor(controllerType: any, options: any);
    static connect(controllerType: any, options: any): any;
  }
}