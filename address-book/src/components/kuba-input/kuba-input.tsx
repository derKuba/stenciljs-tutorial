import { Component, Host, h, Event, EventEmitter, Prop } from "@stencil/core";

@Component({
  tag: "kuba-input",
  styleUrl: "kuba-input.css",
  shadow: true,
})
export class KubaInput {
  @Prop() componentId: string;

  @Prop() label: string;

  @Prop() inputType: "text" | "number" = "text";

  @Event({ bubbles: true }) inputEvent: EventEmitter;

  private onInput = (event) => {
    this.inputEvent.emit({ value: event.target.value });
  };

  render() {
    return (
      <Host>
        <div class="kuba-input">
          <label htmlFor={this.componentId}>{this.label}</label>
          <input
            type={this.componentId}
            id={this.componentId}
            value=""
            onInput={this.onInput}
          />
        </div>
      </Host>
    );
  }
}
