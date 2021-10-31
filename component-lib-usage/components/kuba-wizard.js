import { attachShadow, h, Host, proxyCustomElement } from '@stencil/core/internal/client';

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

const KubaWizard = /*@__PURE__*/proxyCustomElement(KubaWizard$1, [1,"kuba-wizard",{"currentPage":[32]},[[4,"wizard:previous","moveLeftEventListener"],[4,"wizard:next","moveRightEventListener"]]]);

export { KubaWizard };
