import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "kuba-home",
  styleUrl: "kuba-home.css",
  shadow: true,
})
export class KubaHome {
  render() {
    return (
      <Host>
        <h1>Kuba-Home</h1>

        <kuba-list></kuba-list>
      </Host>
    );
  }
}
