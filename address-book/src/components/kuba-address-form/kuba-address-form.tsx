import { Component, Host, h, State } from "@stencil/core";

@Component({
  tag: "kuba-address-form",
  styleUrl: "kuba-address-form.css",
  shadow: true,
})
export class KubaAddressForm {
  @State() innerText: string;

  private onChange = ({ detail: { value } }: { detail: { value: string } }) => {
    console.log(value);
    this.innerText = value;
  };

  private onSubmit = () => {
    alert(this.innerText);
  };

  render() {
    return (
      <Host>
        <h2>Adress-Formular</h2>
        <kuba-input
          componentId="name"
          label="Name:"
          onInputEvent={this.onChange}
        ></kuba-input>
        <kuba-button handleSubmit={this.onSubmit}>speichern</kuba-button>
        <hr />
        <h3>Eingegebene Daten:</h3>
        Name: {this.innerText}
      </Host>
    );
  }
}
