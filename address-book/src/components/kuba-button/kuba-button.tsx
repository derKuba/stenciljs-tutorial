import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "kuba-button",
  styleUrl: "kuba-button.css",
  shadow: true,
})
export class KubaButton {

  @Prop() componentId: string;

  @Prop() handleSubmit;

  private handleClickEvent = () => {
    this.handleSubmit();
  };

  render() {
    return (
      <Host>
        <button onClick={this.handleClickEvent} id={this.componentId}>
          <slot />
        </button>
      </Host>
    );
  }
}
