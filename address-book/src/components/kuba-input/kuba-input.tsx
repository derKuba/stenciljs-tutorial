import { Component, Host, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'kuba-input',
  styleUrl: 'kuba-input.css',
  shadow: true,
})
export class KubaInput {

  @Event({ bubbles: true }) inputEvent: EventEmitter;

  private onInput = (event) => {
    this.inputEvent.emit({ value: event.target.value });
  }

  render() {
    return (
      <Host>
        <div class="kuba-input">
          <label htmlFor="name">Male</label>
          <input type="text" name="name" id="name" value="" onInput={this.onInput} />
        </div>
      </Host>
    );
  }

}
