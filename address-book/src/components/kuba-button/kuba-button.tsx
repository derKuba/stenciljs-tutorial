import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'kuba-button',
  styleUrl: 'kuba-button.css',
  shadow: true,
})
export class KubaButton {

  render() {
    return (
      <Host>
        <button> speichern</button>
      </Host>
    );
  }

}
