import { Component, Host, h, Element } from '@stencil/core';

@Component({
  tag: 'kuba-table-options',
  styleUrl: 'kuba-table-options.css',
  shadow: true,
})
export class KubaTableOptions {

  @Element() $el: HTMLKubaTableOptionsElement;

  private headItems = [];
  private bodyItems = [];

  connectedCallback() {
    const headOptions = Array.from(this.$el.querySelectorAll("kuba-table-options-head option"));
    this.headItems = headOptions.map(item => item.getAttribute("value"));

    const bodyOptions = Array.from(this.$el.querySelectorAll("kuba-table-options-body option"));
    const bodyOptionsValues = bodyOptions.map(item => item.getAttribute("value"));
    this.bodyItems = this.splitArrayIntoChunks(bodyOptionsValues, this.headItems.length);

  }

  // https://ourcodeworld.com/articles/read/278/how-to-split-an-array-into-chunks-of-the-same-size-easily-in-javascript
  private splitArrayIntoChunks = (items, size) => {
    let chunks = [];
    while (items.length) {
      chunks.push(items.splice(0, size));
    }
    return chunks;
  }

  render() {

    return (
      <Host>
        <table>
          <thead>
            <tr>
              {
                this.headItems.length > 0 && this.headItems.map(row => <th>{row}</th>)
              }
            </tr>
          </thead>
          <tbody>
            {
              this.bodyItems.length > 0 && this.bodyItems.map(row => <tr>
                {row.map(cell => <td>{cell}</td>)}
              </tr>)
            }
          </tbody>
        </table>
      </Host>
    );
  }
}
