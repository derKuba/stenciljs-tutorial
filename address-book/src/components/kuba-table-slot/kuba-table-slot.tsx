import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'kuba-table-slot',
  styleUrl: 'kuba-table-slot.css',
  shadow: true,
})
export class KubaTableSlot {

  render() {
    return (
      <Host>
        <table>
          <thead>
            <slot name="table-head" />
          </thead>
          <tbody>
            <slot />
          </tbody>
        </table>
      </Host>
    );
  }

}
