import { Registry } from '../registry';
import { decorate } from './private/utils';

function customElement() {
    return decorate(handleDescriptor, arguments);
}

let handleDescriptor = function(target, [tagName, opts = {}]) {

  let options = {
    //content:'',
    accessors:{},
    methods: {},
    lifecycle: {},
    events: {}
  };

  if(opts.extendsFrom !== undefined)
  { options['extends']= opts.extendsFrom; }

  if(opts.template !== undefined)
  { options.template = opts.template; }

  if(!target.prototype.___metadata) return;
  for(var key in target.prototype.___metadata)
  {
    var metadata = target.prototype.___metadata[key];

    if(!metadata)continue;
    options[metadata.type][key] = metadata.value;
  }

  //delete metadata once the exported options by method decorators are collected
  delete target.prototype.___metadata;
  return Registry.register(tagName, target, options);
};

export default customElement;
