import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "kuba-button",
  styleUrl: "kuba-button.css",
  shadow: true,
})
export class KubaButton {
  @Prop() handleSubmit;

  render() {
    return (
      <Host>
        <button onClick={this.handleSubmit}> speichern</button>
      </Host>
    );
  }
}
