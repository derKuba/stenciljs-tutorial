import { newSpecPage } from "@stencil/core/testing";
import { KubaButton } from "../kuba-button";

describe("kuba-button", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [KubaButton],
      html: `<kuba-button></kuba-button>`,
    });
    expect(page.root).toEqualHtml(`
      <kuba-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kuba-button>
    `);
  });
});
