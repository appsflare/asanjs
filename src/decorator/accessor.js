var accessor = function(target, key, descriptor, options) {
  return {...descriptor,
    value: function(){

  }
  };
};

export default function(options) {
  return accessor(...arguments, options);
}
