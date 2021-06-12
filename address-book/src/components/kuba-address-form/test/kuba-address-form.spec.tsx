import { newSpecPage } from "@stencil/core/testing";
import { KubaAddressForm } from "../kuba-address-form";

describe("kuba-address-form", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [KubaAddressForm],
      html: `<kuba-address-form></kuba-address-form>`,
    });
    expect(page.root).toEqualHtml(`
      <kuba-address-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kuba-address-form>
    `);
  });
});
