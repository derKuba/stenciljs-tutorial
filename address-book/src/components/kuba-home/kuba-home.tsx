import { Component, Host, h } from "@stencil/core";

import addressStore from "../../store/address-store";

@Component({
  tag: "kuba-home",
  styleUrl: "kuba-home.css",
  shadow: true,
})
export class KubaHome {
  async componentWillRender() {
    try {
      const response = await fetch("http://localhost:3000/contacts");
      if (response.ok) {
        const contacts = await response.json();

        addressStore.contacts = [...contacts];
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Host>
        <h1>Kuba-Home</h1>

        <kuba-list></kuba-list>
      </Host>
    );
  }
}
