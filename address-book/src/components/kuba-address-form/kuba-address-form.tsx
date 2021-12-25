import { Component, Host, h, State, Prop, Element } from "@stencil/core";
import { MatchResults } from "@stencil/router";

import addressStore from "../../store/address-store";
import { validate } from "../../validation";

import { KubaInputFunctional } from "../kuba-input/kuba-input-functional";

@Component({
  tag: "kuba-address-form",
  styleUrl: "kuba-address-form.css",
  shadow: true,
})
export class KubaAddressForm {
  @State() addressState: string;
  @State() firstNameState: string;
  @State() lastNameState: string;
  @State() idState: string;
  @State() ageState: number;

  @Prop() match: MatchResults;

  @Element() element: HTMLFormElement;

  private onChangeFirstName = ({
    detail: { value },
  }: {
    detail: { value: string };
  }) => {
    validate(value);

    this.firstNameState = value;
    this.logger("firstName was filled");
  };

  private onChangeLastName = ({
    detail: { value },
  }: {
    detail: { value: string };
  }) => {
    this.lastNameState = value;
    this.logger("lastName was filled");
  };

  private onChangeAddress = ({ value }: { value: string }) => {
    this.addressState = value;
  };

  private onChangeAge = ({
    detail: { value },
  }: {
    detail: { value: string };
  }) => {
    validate(value);

    this.ageState = Number(value);
  };

  private logger = (content: string) => {
    console.log(`logger: ${content}`);
  };

  connectedCallback() {
    addressStore.contacts.forEach((item) => {
      if (item.id === this.match.params.id) {
        this.addressState = item.address;
        this.firstNameState = item.firstName;
        this.lastNameState = item.lastName;
        this.idState = item.id;
      }
    });

    setTimeout(() => this.logger("connectedCallback"), 3000);
  }

  private onSubmit = async () => {
    const id =
      this.idState === undefined
        ? this.match?.params.id
          ? this.match?.params.id
          : null
        : this.idState;

    let data = {
      firstName: this.firstNameState,
      lastName: this.lastNameState,
      address: this.addressState,
      id: id,
    };

    const contactResponse = await fetch("http://localhost:3000/contacts", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    if (contactResponse.ok) {
      const contact = await contactResponse.json();
      this.addressState = contact.address;
      this.firstNameState = contact.firstName;
      this.lastNameState = contact.lastName;
      this.idState = contact.id;
    }
  };

  render() {
    return (
      <Host>
        <form id="form">
          <h1>Kontakt-Form {this.match?.params.id}</h1>

          <stencil-route-link url="/" activeClass="link-active" id="backLink">
            Zurück
          </stencil-route-link>

          <hr />

          <kuba-input
            componentId="first-name"
            label="Vorname:"
            onInputEvent={this.onChangeFirstName}
            value={this.firstNameState}
            required="true"
            pattern="[a-zA-Z]+"
          ></kuba-input>

          <kuba-input
            componentId="last-name"
            label="Nachname:"
            onInputEvent={this.onChangeLastName}
            value={this.lastNameState}
            required="true"
          ></kuba-input>

          <kuba-input
            componentId="age"
            label="Alter:"
            onInputEvent={this.onChangeAge}
            value={`${this.ageState || ""}`}
            required="true"
          ></kuba-input>

          <KubaInputFunctional
            componentId="street"
            label="Adresse:"
            value={this.addressState}
            type={"text"}
            setter={this.onChangeAddress}
          ></KubaInputFunctional>

          <br />

          <kuba-button
            component-id="saveContactButton"
            handleSubmit={this.onSubmit}
          >
            speichern
          </kuba-button>
          <hr />
        </form>
      </Host>
    );
  }
}
