import { decorate } from './private/utils';

let handleDescriptor = function(target,key, descriptor) {

function valueHandler(){
  if(!this.controller)return;
  return descriptor.value.apply(this.controller, arguments);
};

  target.___metadata = target.___metadata || {};
  target.___metadata[key] = { type: 'lifecycle', value: valueHandler};

  return {...descriptor,
    value:  valueHandler
  };
};

export default function lifeCycleEventHandler() {
    return decorate(handleDescriptor, arguments);
}
