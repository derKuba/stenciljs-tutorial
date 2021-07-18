import { Component, Host, h } from '@stencil/core';

import addressStore from "../../store/address-store";

@Component({
  tag: 'kuba-list',
  styleUrl: 'kuba-list.css',
  shadow: true,
})
export class KubaList {


  deleteContact = (id: string) => {
    const filteredArray = addressStore.contacts.filter(item => item.id !== id);
    addressStore.contacts = filteredArray;
  }

  render() {
  console.log("rednder", addressStore.contacts)
    return (
      <Host>
      
        <stencil-route-link url="/contact" activeClass="link-active">
          Neu
        </stencil-route-link>
        <hr/>
    
        <kuba-table-options delete={this.deleteContact} key={addressStore.contacts.length}>
          <kuba-table-options-head>
            <option value="id" />
            <option value="name" />
            <option value="vorname" />
            <option value="aktion" />
          </kuba-table-options-head>
          <kuba-table-options-body>
            {addressStore.contacts.map( (row, index)=> [<option value={row.id} />,<option value={row.firstname} />,<option value={row.lastName} />,<option value={row.id} />] )}
          </kuba-table-options-body>
        </kuba-table-options>
        <hr />
      </Host>
    );
  }

}
