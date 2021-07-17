import { Component, Host, h, State, Prop } from "@stencil/core";
import { MatchResults } from "@stencil/router";

import addressStore from "../../store/address-store";

@Component({
  tag: "kuba-address-form",
  styleUrl: "kuba-address-form.css",
  shadow: true,
})
export class KubaAddressForm {
  @State() firstNameState: string;
  @State() lastNameState: string;

  @Prop() match: MatchResults;

  private onChangeFirstName = ({ detail: { value } }: { detail: { value: string } }) => {
    this.firstNameState = value;
  };

  private onChangeLastName = ({ detail: { value } }: { detail: { value: string } }) => {
    this.lastNameState = value;
  };

  private onSubmit = () => {
    console.log(this.firstNameState, this.lastNameState);
    addressStore.contacts.push({ firstname: this.firstNameState, lastName: this.lastNameState });
    this.firstNameState = "";
    this.lastNameState = "";
  };

  render() {

    return (
      <Host>
        <h1>Kontakt-Form {this.match.params.id}</h1>

        <stencil-route-link url="/" activeClass="link-active">
          Zurück
        </stencil-route-link>

        <hr/>

        <kuba-input
          componentId="first-name"
          label="FirstName:"
          onInputEvent={this.onChangeFirstName}
          value={this.firstNameState}
        ></kuba-input>

        <kuba-input
          componentId="last-name"
          label="LastName:"
          onInputEvent={this.onChangeLastName}
          value={this.lastNameState}
        ></kuba-input>

        <kuba-button handleSubmit={this.onSubmit}>speichern</kuba-button>
        <hr />
      
      </Host>
    );
  }
}
