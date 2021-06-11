import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'kuba-address-form',
  styleUrl: 'kuba-address-form.css',
  shadow: true,
})
export class KubaAddressForm {

  @State() innerText: string;

  onChange = ({ detail: { value } }: { detail: { value: string } }) => {
    console.log(value);
    this.innerText = value;
  }

  render() {
    return (
      <Host>
        <h2>Adress-Formular</h2>
        <kuba-input onInputEvent={this.onChange}></kuba-input>
        <kuba-button></kuba-button>
      </Host>
    );
  }

}
