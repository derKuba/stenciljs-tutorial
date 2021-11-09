import { Component, Host, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'kuba-wizard',
  styleUrl: 'kuba-wizard.css',
  shadow: true,
})
export class KubaWizard {
  @State() currentPage = 0;

  @Listen('wizard:previous', { target: 'document' })
  moveLeftEventListener(event) {
    console.log(event);
    this.moveLeft();
  }

  @Listen('wizard:next', { target: 'document' })
  moveRightEventListener(event) {
    console.log(event);
    this.moveRight();
  }

  moveRight = () => {
    this.currentPage++;
  };

  moveLeft = () => {
    if (this.currentPage - 1 > 0) {
      this.currentPage = this.currentPage - 1;
    } else {
      this.currentPage = 0;
    }
  };

  render() {
    return (
      <Host>
        <div>
          <h1>Aktuell befinden sie sich auf Seite {this.currentPage}</h1>
          <hr />
          <button onClick={this.moveLeft}>Left</button>
          <button onClick={this.moveRight}>Right</button>
        </div>
      </Host>
    );
  }
}
