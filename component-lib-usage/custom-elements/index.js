import { attachShadow, h, Host, createEvent, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

const kubaButtonCss = ":host{display:block}button{background-color:lightgreen;border:none;color:black;padding:15px 25px;text-align:center;text-decoration:none;display:inline-block;font-size:16px}";

const KubaButton$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.handleClickEvent = () => {
      this.handleSubmit();
    };
  }
  render() {
    return (h(Host, null, h("button", { onClick: this.handleClickEvent, id: this.componentId }, h("slot", null))));
  }
  static get style() { return kubaButtonCss; }
};

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

const kubaWizardCss = ":host{display:block}";

const KubaWizard$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.currentPage = 0;
    this.moveRight = () => {
      this.currentPage++;
    };
    this.moveLeft = () => {
      if (this.currentPage - 1 > 0) {
        this.currentPage = this.currentPage - 1;
      }
      else {
        this.currentPage = 0;
      }
    };
  }
  moveLeftEventListener() {
    this.moveLeft();
  }
  moveRightEventListener() {
    this.moveRight();
  }
  render() {
    return (h(Host, null, h("div", null, h("h1", null, "Aktuell befinden sie sich auf Seite ", this.currentPage), h("hr", null), h("button", { onClick: this.moveLeft }, "Left"), h("button", { onClick: this.moveRight }, "Right"))));
  }
  static get style() { return kubaWizardCss; }
};

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

const MyComponent$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", null, "Hallo, Welt! I'm ", this.getText());
  }
  static get style() { return myComponentCss; }
};

const KubaButton = /*@__PURE__*/proxyCustomElement(KubaButton$1, [1,"kuba-button",{"componentId":[1,"component-id"],"handleSubmit":[8,"handle-submit"]}]);
const KubaInput = /*@__PURE__*/proxyCustomElement(KubaInput$1, [4,"kuba-input",{"componentId":[1,"component-id"],"label":[1],"inputType":[1,"input-type"],"value":[1],"required":[8],"min":[8],"max":[8],"maxlength":[8],"pattern":[8]}]);
const KubaWizard = /*@__PURE__*/proxyCustomElement(KubaWizard$1, [1,"kuba-wizard",{"currentPage":[32]},[[4,"wizard:previous","moveLeftEventListener"],[4,"wizard:next","moveRightEventListener"]]]);
const MyComponent = /*@__PURE__*/proxyCustomElement(MyComponent$1, [1,"my-component",{"first":[1],"middle":[1],"last":[1]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      KubaButton,
  KubaInput,
  KubaWizard,
  MyComponent
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { KubaButton, KubaInput, KubaWizard, MyComponent, defineCustomElements };
