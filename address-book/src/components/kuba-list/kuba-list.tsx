import { Component, Host, h } from '@stencil/core';

import addressStore from "../../store/address-store";

@Component({
  tag: 'kuba-list',
  styleUrl: 'kuba-list.css',
  shadow: true,
})
export class KubaList {

  render() {
  
    return (
      <Host>
      
        <stencil-route-link url="/contact" activeClass="link-active">
          Neu
        </stencil-route-link>
        <hr/>
    
        <kuba-table-options>
          <kuba-table-options-head>
            <option value="id" />
            <option value="name" />
            <option value="vorname" />
          </kuba-table-options-head>
          <kuba-table-options-body>
            {addressStore.contacts.map( (row, index)=> [<option value={index+1} />,<option value={row.firstname} />,<option value={row.lastName} />] )}
          </kuba-table-options-body>
        </kuba-table-options>
        <hr />
      </Host>
    );
  }

}
