import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'kuba-table-attributes',
  styleUrl: 'kuba-table-attributes.css',
  shadow: true,
})
export class KubaTableAttributes {

  @Prop() head;
  @Prop() body;

  render() {
    return (
      <Host>
        <table>
          <thead>
            <tr>
              {
                this.head.length > 0 && this.head.map(row => <th>{row}</th>)
              }
            </tr>
          </thead>
          <tbody>
            {
              this.body.length > 0 && this.body.map(row => <tr>
                {row.map(cell => <td>{cell}</td>)}
              </tr>)
            }
          </tbody>
        </table>
      </Host>
    );
  }
}
