import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "kuba-button",
  styleUrl: "kuba-button.css",
  shadow: true,
})
export class KubaButton {
  @Prop() handleSubmit;

  private handleClickEvent = () => {
    this.handleSubmit();
  };

  render() {
    return (
      <Host>
        <button onClick={this.handleClickEvent}>
          <slot />
        </button>
      </Host>
    );
  }
}
