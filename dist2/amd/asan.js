define(['exports', 'asanjs-decorators'], function (exports, _asanjsDecorators) {
    'use strict';

    exports.__esModule = true;

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var BaseCustomElement = (function () {
        function BaseCustomElement(element) {
            _classCallCheck(this, BaseCustomElement);

            this.element = element;
            this.__active = true;
        }

        BaseCustomElement.prototype.attachingTemplate = function attachingTemplate(template) {
            return Promise.resolve(template);
        };

        BaseCustomElement.prototype.attachedTemplate = function attachedTemplate() {};

        BaseCustomElement.prototype.suspend = function suspend() {
            var _this = this;

            return this.suspending().then(function (val) {
                _this.__active = val;
                _this.suspended();
            });
        };

        BaseCustomElement.prototype.suspending = function suspending() {
            return Promise.resolve(true);
        };

        BaseCustomElement.prototype.suspended = function suspended() {};

        BaseCustomElement.prototype.query = function query(sel) {
            return this.element.querySelector(sel);
        };

        BaseCustomElement.prototype.queryAll = function queryAll(sel) {
            return this.element.querySelectorAll(sel);
        };

        return BaseCustomElement;
    })();

    exports.BaseCustomElement = BaseCustomElement;

    var AsanElement = (function (_BaseCustomElement) {
        _inherits(AsanElement, _BaseCustomElement);

        function AsanElement(element) {
            _classCallCheck(this, _AsanElement);

            _BaseCustomElement.call(this, element);
        }

        _createDecoratedClass(AsanElement, [{
            key: 'created',
            decorators: [_asanjsDecorators.lifeCycleEventHandler()],
            value: function created() {}
        }, {
            key: 'inserted',
            decorators: [_asanjsDecorators.lifeCycleEventHandler()],
            value: function inserted() {}
        }, {
            key: 'removed',
            decorators: [_asanjsDecorators.lifeCycleEventHandler()],
            value: function removed() {}
        }, {
            key: 'attributeChanged',
            decorators: [_asanjsDecorators.lifeCycleEventHandler()],
            value: function attributeChanged() {}
        }, {
            key: 'setValue',
            decorators: [_asanjsDecorators.eventHandler('click:delegate(button)')],
            value: function setValue() {}
        }, {
            key: 'clearValue',
            decorators: [_asanjsDecorators.eventHandler('click:delegate(#clear)')],
            value: function clearValue() {}
        }, {
            key: 'makeApi',
            decorators: [_asanjsDecorators.method()],
            value: function makeApi() {}
        }]);

        var _AsanElement = AsanElement;
        AsanElement = _asanjsDecorators.customElement('asan-element', { template: '<span>Hi, I am element asan!!!</span>' })(AsanElement) || AsanElement;
        return AsanElement;
    })(BaseCustomElement);

    exports.AsanElement = AsanElement;
});
