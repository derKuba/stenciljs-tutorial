import { createEvent, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

const kubaInputCss = ":host{display:block}.kuba-input{margin-bottom:25px;display:flex;justify-content:space-between;width:400px}.kuba-input label{margin-right:30px}";

const KubaInput$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.inputEvent = createEvent(this, "inputEvent", 7);
    this.inputType = "text";
    this.onInput = (event) => {
      console.log(event.target.validity);
      this.inputEvent.emit({ value: event.target.value });
    };
  }
  render() {
    const attributes = {
      required: this.required,
      min: this.min,
      max: this.max,
      maxlength: this.maxlength,
      pattern: this.pattern,
    };
    return (h(Host, null, h("div", { class: "kuba-input" }, h("label", { htmlFor: this.componentId }, this.label), h("input", Object.assign({ type: this.inputType, id: this.componentId, value: this.value, onInput: this.onInput }, attributes))), h("slot", null)));
  }
  static get style() { return kubaInputCss; }
};

const KubaInput = /*@__PURE__*/proxyCustomElement(KubaInput$1, [4,"kuba-input",{"componentId":[1,"component-id"],"label":[1],"inputType":[1,"input-type"],"value":[1],"required":[8],"min":[8],"max":[8],"maxlength":[8],"pattern":[8]}]);

export { KubaInput };
