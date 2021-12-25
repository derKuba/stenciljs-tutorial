import { Component, Host, h } from "@stencil/core";

import addressStore from "../../store/address-store";

@Component({
  tag: "kuba-list",
  styleUrl: "kuba-list.css",
  shadow: true,
})
export class KubaList {
  deleteContact = async (id: string) => {
    // const filteredArray = addressStore.contacts.filter(
    //   (item) => item.id !== id,
    // );
    // addressStore.contacts = filteredArray;

    const response = await fetch(`http://localhost:3000/contacts/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    });

    if (response.ok) {
      const newContactList = await response.json();
      addressStore.contacts = [...newContactList];
    }
  };

  render() {
    return (
      <Host>
        <stencil-route-link
          id="addressbook_new_contact"
          url="/contact"
          activeClass="link-active"
        >
          Neuer Kontakt
        </stencil-route-link>
        <hr />

        <kuba-table-options
          delete={this.deleteContact}
          key={addressStore.contacts.length}
        >
          <kuba-table-options-head>
            <option value="id" />
            <option value="name" />
            <option value="vorname" />
            <option value="aktion" />
          </kuba-table-options-head>
          <kuba-table-options-body>
            {addressStore.contacts.length > 0 &&
              addressStore.contacts.map((row) => [
                <option value={row.id} />,
                <option value={row.firstName} />,
                <option value={row.lastName} />,
                <option value={row.id} />,
              ])}
          </kuba-table-options-body>
        </kuba-table-options>
        <hr />
      </Host>
    );
  }
}
