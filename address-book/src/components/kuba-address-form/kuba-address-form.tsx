import { Component, Host, h, State, Prop } from "@stencil/core";
import { MatchResults } from "@stencil/router";

@Component({
  tag: "kuba-address-form",
  styleUrl: "kuba-address-form.css",
  shadow: true,
})
export class KubaAddressForm {
  @State() innerText: string;

  @Prop() match: MatchResults;

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
        <h1>Kontakt-Form {this.match.params.id}</h1>

        <stencil-route-link url="/" activeClass="link-active">
          Zurück
        </stencil-route-link>

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
