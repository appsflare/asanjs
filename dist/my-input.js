"format register";
System.register("examples/my-input.html!text", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = "<div>\n\tHi, I am inside my-input element\n\t<input id=\"input\" type=\"text\"/>\n\t<button >Set</button>\n\t<button id=\"clear\">Clear</button>\n</div>\n";
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
      Asan = _asan.Asan;
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
//# sourceMappingURL=my-input.js.map
