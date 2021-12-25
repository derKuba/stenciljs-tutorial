import { Component, Host, h, Event, EventEmitter, Prop } from "@stencil/core";

@Component({
  tag: "kuba-input",
  styleUrl: "kuba-input.css",
  shadow: false,
})
export class KubaInput {
  @Prop() componentId: string;

  @Prop() label: string;

  @Prop() inputType: "text" | "number" = "text";

  @Prop() value: string;

  @Event() inputEvent: EventEmitter;

  @Prop() required;

  @Prop() min;

  @Prop() max;

  @Prop() maxlength;

  @Prop() pattern;

  private onInput = (event) => {
    this.inputEvent.emit({ value: event.target.value });
  };

  render() {

    const attributes = {
      required: this.required,
      min: this.min,
      max: this.max,
      maxlength: this.maxlength,
      pattern: this.pattern,
    }

    return (
      <Host>
        <div class="kuba-input">
          <label htmlFor={this.componentId}>{this.label}</label>
          <input
            type={this.inputType}
            id={this.componentId}
            value={this.value}
            onInput={this.onInput}
            {...attributes}
          />
        </div>
        <slot />
      </Host>
    );
  }
}
