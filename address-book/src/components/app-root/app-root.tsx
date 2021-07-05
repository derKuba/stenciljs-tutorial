import { Component, h } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url="/" component="kuba-home" exact={true} />
            <stencil-route url="/address-list" component="kuba-home" exact={true} />
            <stencil-route url="/contact/:id" component="kuba-address-form" />
            <stencil-route url="/contact" component="kuba-address-form" />
          </stencil-route-switch>
        </stencil-router>
      </div>
    );
  }
}
