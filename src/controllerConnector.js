export class ControllerConnector {
    constructor(controllerType, options) {
        this.controllerType = controllerType;
        options.lifecycle = options.lifecycle || {
            created: function () {

            },
            removed: function () {

            }
        };

        this._created = options.lifecycle.created;
        this._removed = options.lifecycle.removed;
        var me = this;
        options.lifecycle.created = function () {
            this.controller = new me.controllerType(this);
            if (me.options.template) {
                var template = me.options.template;
                if (this.controller.attachingTemplate) {
                    template = this.controller.attachingTemplate(template);
                }
                this.appendChild(xtag.createFragment(template));
                if (this.controller.attachedTemplate) {
                    this.controller.attachedTemplate();
                }
            }
            me._created.apply(this, arguments);
        };

        options.lifecycle.removed = function () {
            if (!this.controller) {
                return;
            }
            me._removed.apply(this, arguments);
            this.controller = undefined;
        };
        me.options = options;


    }

    static connect(controllerType, options) {
        return new ControllerConnector(controllerType, options).options;
    }
};
