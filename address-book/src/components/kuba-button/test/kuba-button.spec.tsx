import { newSpecPage } from "@stencil/core/testing";
import { KubaButton } from "../kuba-button";

describe("kuba-button", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [KubaButton],
      html: `<kuba-button></kuba-button>`,
    });
    expect(page.root).toMatchInlineSnapshot(`
      <kuba-button>
        <mock:shadow-root>
          <button>
            <slot></slot>
          </button>
        </mock:shadow-root>
      </kuba-button>
    `);
  });
});
