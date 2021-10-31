import { attachShadow, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

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

const KubaButton = /*@__PURE__*/proxyCustomElement(KubaButton$1, [1,"kuba-button",{"componentId":[1,"component-id"],"handleSubmit":[8,"handle-submit"]}]);

export { KubaButton };
