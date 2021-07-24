import { Component, Host, h, State, Prop } from "@stencil/core";
import { MatchResults } from "@stencil/router";

import addressStore from "../../store/address-store";

import { KubaInputFunctional } from "../kuba-input/kuba-input-functional";

@Component({
  tag: "kuba-address-form",
  styleUrl: "kuba-address-form.css",
  shadow: true,
})
export class KubaAddressForm {
  @State() firstNameState: string;
  @State() lastNameState: string;
  @State() idState: string;

  @Prop() match: MatchResults;

  private onChangeFirstName = ({
    detail: { value },
  }: {
    detail: { value: string };
  }) => {
    this.firstNameState = value;
  };

  private onChangeLastName = ({
    detail: { value },
  }: {
    detail: { value: string };
  }) => {
    this.lastNameState = value;
  };

  connectedCallback() {
    addressStore.contacts.forEach((item) => {
      if (item.id === this.match.params.id) {
        this.firstNameState = item.firstname;
        this.lastNameState = item.lastName;
        this.idState = item.id;
      }
    });
  }

  // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
  create_UUID = () => {
    var dt = new Date().getTime();
    var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
      },
    );
    return uuid;
  };

  private onSubmit = () => {
    const uuid = this.create_UUID();
    console.log("uuid", uuid);
    addressStore.contacts.push({
      firstname: this.firstNameState,
      lastName: this.lastNameState,
      id: uuid,
    });
    addressStore.contacts = [...addressStore.contacts];

    this.firstNameState = "";
    this.lastNameState = "";
    this.idState = "";
  };

  render() {
    return (
      <Host>
        <h1>Kontakt-Form {this.match.params.id}</h1>

        <stencil-route-link url="/" activeClass="link-active">
          Zurück
        </stencil-route-link>

        <hr />

        <button onClick={() => console.log(addressStore.contacts)}>test</button>

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

        <KubaInputFunctional
          componentId="street"
          label="Straße:"
          value={"Musterstreet"}
          type={"text"}
        ></KubaInputFunctional>

        <kuba-button handleSubmit={this.onSubmit}>speichern</kuba-button>
        <hr />
      </Host>
    );
  }
}