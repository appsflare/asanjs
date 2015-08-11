var attribute = function(target, key, descriptor, options) {
  let val = {...descriptor,
    value:  { attribute: options }
  };

  if(target._class){
      debugger;
    target._class.accessors[key] = val.value;
  }

  return val;
};

export default function(options) {
  return function(){
    return  attribute(...arguments, options);
  };
}
