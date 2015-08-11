"format register";
System.register("npm:core-js@0.9.18/library/modules/$.get-names", ["npm:core-js@0.9.18/library/modules/$"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var $ = require("npm:core-js@0.9.18/library/modules/$"),
      toString = {}.toString,
      getNames = $.getNames;
  var windowNames = typeof window == 'object' && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
  function getWindowNames(it) {
    try {
      return getNames(it);
    } catch (e) {
      return windowNames.slice();
    }
  }
  module.exports.get = function getOwnPropertyNames(it) {
    if (windowNames && toString.call(it) == '[object Window]')
      return getWindowNames(it);
    return getNames($.toObject(it));
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:core-js@0.9.18/library/fn/object/create", ["npm:core-js@0.9.18/library/modules/$"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var $ = require("npm:core-js@0.9.18/library/modules/$");
  module.exports = function create(P, D) {
    return $.create(P, D);
  };
  global.define = __define;
  return module.exports;
});

System.register("examples/my-input.html!text", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = "<div>\r\n\tHi, I am inside my-input element\r\n\t<input id=\"input\" type=\"text\"/>\r\n\t<button >Set</button>\r\n\t<button id=\"clear\">Clear</button>\r\n</div>";
  global.define = __define;
  return module.exports;
});

System.register("npm:core-js@0.9.18/library/modules/es6.object.statics-accept-primitives", ["npm:core-js@0.9.18/library/modules/$", "npm:core-js@0.9.18/library/modules/$.def", "npm:core-js@0.9.18/library/modules/$.get-names"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var $ = require("npm:core-js@0.9.18/library/modules/$"),
      $def = require("npm:core-js@0.9.18/library/modules/$.def"),
      isObject = $.isObject,
      toObject = $.toObject;
  $.each.call(('freeze,seal,preventExtensions,isFrozen,isSealed,isExtensible,' + 'getOwnPropertyDescriptor,getPrototypeOf,keys,getOwnPropertyNames').split(','), function(KEY, ID) {
    var fn = ($.core.Object || {})[KEY] || Object[KEY],
        forced = 0,
        method = {};
    method[KEY] = ID == 0 ? function freeze(it) {
      return isObject(it) ? fn(it) : it;
    } : ID == 1 ? function seal(it) {
      return isObject(it) ? fn(it) : it;
    } : ID == 2 ? function preventExtensions(it) {
      return isObject(it) ? fn(it) : it;
    } : ID == 3 ? function isFrozen(it) {
      return isObject(it) ? fn(it) : true;
    } : ID == 4 ? function isSealed(it) {
      return isObject(it) ? fn(it) : true;
    } : ID == 5 ? function isExtensible(it) {
      return isObject(it) ? fn(it) : false;
    } : ID == 6 ? function getOwnPropertyDescriptor(it, key) {
      return fn(toObject(it), key);
    } : ID == 7 ? function getPrototypeOf(it) {
      return fn(Object($.assertDefined(it)));
    } : ID == 8 ? function keys(it) {
      return fn(toObject(it));
    } : require("npm:core-js@0.9.18/library/modules/$.get-names").get;
    try {
      fn('z');
    } catch (e) {
      forced = 1;
    }
    $def($def.S + $def.F * forced, 'Object', method);
  });
  global.define = __define;
  return module.exports;
});

System.register("npm:babel-runtime@5.5.5/core-js/object/create", ["npm:core-js@0.9.18/library/fn/object/create"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": require("npm:core-js@0.9.18/library/fn/object/create"),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:core-js@0.9.18/library/fn/object/get-own-property-descriptor", ["npm:core-js@0.9.18/library/modules/$", "npm:core-js@0.9.18/library/modules/es6.object.statics-accept-primitives"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var $ = require("npm:core-js@0.9.18/library/modules/$");
  require("npm:core-js@0.9.18/library/modules/es6.object.statics-accept-primitives");
  module.exports = function getOwnPropertyDescriptor(it, key) {
    return $.getDesc(it, key);
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:babel-runtime@5.5.5/helpers/inherits", ["npm:babel-runtime@5.5.5/core-js/object/create"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  "use strict";
  var _Object$create = require("npm:babel-runtime@5.5.5/core-js/object/create")["default"];
  exports["default"] = function(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = _Object$create(superClass && superClass.prototype, {constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }});
    if (superClass)
      subClass.__proto__ = superClass;
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

System.register("npm:babel-runtime@5.5.5/helpers/create-decorated-class", ["npm:babel-runtime@5.5.5/core-js/object/define-property"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  "use strict";
  var _Object$defineProperty = require("npm:babel-runtime@5.5.5/core-js/object/define-property")["default"];
  exports["default"] = (function() {
    function defineProperties(target, descriptors, initializers) {
      for (var i = 0; i < descriptors.length; i++) {
        var descriptor = descriptors[i];
        var decorators = descriptor.decorators;
        var key = descriptor.key;
        delete descriptor.key;
        delete descriptor.decorators;
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor || descriptor.initializer)
          descriptor.writable = true;
        if (decorators) {
          for (var f = 0; f < decorators.length; f++) {
            var decorator = decorators[f];
            if (typeof decorator === "function") {
              descriptor = decorator(target, key, descriptor) || descriptor;
            } else {
              throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator);
            }
          }
          if (descriptor.initializer !== undefined) {
            initializers[key] = descriptor;
            continue;
          }
        }
        _Object$defineProperty(target, key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps, protoInitializers, staticInitializers) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps, protoInitializers);
      if (staticProps)
        defineProperties(Constructor, staticProps, staticInitializers);
      return Constructor;
    };
  })();
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

System.register("npm:babel-runtime@5.5.5/core-js/object/get-own-property-descriptor", ["npm:core-js@0.9.18/library/fn/object/get-own-property-descriptor"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": require("npm:core-js@0.9.18/library/fn/object/get-own-property-descriptor"),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:babel-runtime@5.5.5/helpers/get", ["npm:babel-runtime@5.5.5/core-js/object/get-own-property-descriptor"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  "use strict";
  var _Object$getOwnPropertyDescriptor = require("npm:babel-runtime@5.5.5/core-js/object/get-own-property-descriptor")["default"];
  exports["default"] = function get(_x, _x2, _x3) {
    var _again = true;
    _function: while (_again) {
      var object = _x,
          property = _x2,
          receiver = _x3;
      desc = parent = getter = undefined;
      _again = false;
      var desc = _Object$getOwnPropertyDescriptor(object, property);
      if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) {
          return undefined;
        } else {
          _x = parent;
          _x2 = property;
          _x3 = receiver;
          _again = true;
          continue _function;
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;
        if (getter === undefined) {
          return undefined;
        }
        return getter.call(receiver);
      }
    }
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

System.register('examples/my-input', ['npm:babel-runtime@5.5.5/helpers/get', 'npm:babel-runtime@5.5.5/helpers/inherits', 'npm:babel-runtime@5.5.5/helpers/create-decorated-class', 'npm:babel-runtime@5.5.5/helpers/class-call-check', 'asan', 'examples/my-input.html!text'], function (_export) {
  var _get, _inherits, _createDecoratedClass, _classCallCheck, Asan, template, _Asan$Decorators, attribute, customElement, lifeCycleEventHandler, deprecate, method, eventHandler, ExtendedInput;

  return {
    setters: [function (_npmBabelRuntime555HelpersGet) {
      _get = _npmBabelRuntime555HelpersGet['default'];
    }, function (_npmBabelRuntime555HelpersInherits) {
      _inherits = _npmBabelRuntime555HelpersInherits['default'];
    }, function (_npmBabelRuntime555HelpersCreateDecoratedClass) {
      _createDecoratedClass = _npmBabelRuntime555HelpersCreateDecoratedClass['default'];
    }, function (_npmBabelRuntime555HelpersClassCallCheck) {
      _classCallCheck = _npmBabelRuntime555HelpersClassCallCheck['default'];
    }, function (_asan) {
      Asan = _asan['default'];
    }, function (_examplesMyInputHtmlText) {
      template = _examplesMyInputHtmlText['default'];
    }],
    execute: function () {
      'use strict';

      _Asan$Decorators = Asan.Decorators;
      attribute = _Asan$Decorators.attribute;
      customElement = _Asan$Decorators.customElement;
      lifeCycleEventHandler = _Asan$Decorators.lifeCycleEventHandler;
      deprecate = _Asan$Decorators.deprecate;
      method = _Asan$Decorators.method;
      eventHandler = _Asan$Decorators.eventHandler;

      ExtendedInput = (function (_Asan$BaseCustomElement) {
        _inherits(ExtendedInput, _Asan$BaseCustomElement);

        function ExtendedInput(element) {
          _classCallCheck(this, _ExtendedInput);

          _get(Object.getPrototypeOf(_ExtendedInput.prototype), 'constructor', this).call(this, element);
        }

        _createDecoratedClass(ExtendedInput, [{
          key: 'created',
          decorators: [lifeCycleEventHandler()],
          value: function created() {
            // fired once at the time a component
            // is initially created or parsed
            console.log('my-input created: OK');
          }
        }, {
          key: 'inserted',
          decorators: [lifeCycleEventHandler()],
          value: function inserted() {
            // fired each time a component
            // is inserted into the DOM
            console.log('my-input inserted: OK');
          }
        }, {
          key: 'removed',
          decorators: [lifeCycleEventHandler()],
          value: function removed() {
            // fired each time an element
            // is removed from DOM
            console.log('my-input removed: OK');
          }
        }, {
          key: 'attributeChanged',
          decorators: [lifeCycleEventHandler()],
          value: function attributeChanged() {}
        }, {
          key: 'setValue',
          decorators: [eventHandler('click:delegate(button)')],
          value: function setValue() {
            this.query('#input').value = 'Bah blah...';
          }
        }, {
          key: 'clearValue',
          decorators: [eventHandler('click:delegate(#clear)')],
          value: function clearValue() {
            this.query('#input').value = '';
          }
        }, {
          key: 'makeApi',
          decorators: [method()],
          value: function makeApi() {}
        }]);

        var _ExtendedInput = ExtendedInput;
        ExtendedInput = customElement('my-input', { template: template })(ExtendedInput) || ExtendedInput;
        return ExtendedInput;
      })(Asan.BaseCustomElement);

      _export('default', ExtendedInput);
    }
  };
});

// fired when attributes are set
//# sourceMappingURL=my-input-asan.js.map
