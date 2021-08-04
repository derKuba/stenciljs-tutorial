import { newSpecPage } from "@stencil/core/testing";
import { KubaTableSlot } from "../kuba-table-slot";

describe("kuba-table-slot", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [KubaTableSlot],
      html: `<kuba-table-slot></kuba-table-slot>`,
    });
    expect(page.root).toEqualHtml(`
      <kuba-table-slot>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kuba-table-slot>
    `);
  });
});
