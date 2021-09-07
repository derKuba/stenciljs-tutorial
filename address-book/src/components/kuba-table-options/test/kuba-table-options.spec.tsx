import { newSpecPage } from "@stencil/core/testing";
import { KubaTableOptions } from "../kuba-table-options";

describe("kuba-table-options", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [KubaTableOptions],
      html: `<kuba-table-options>
    <kuba-table-options-head>
        <option value="id" />
        <option value="name" />
        <option value="vorname" />
    </kuba-table-options-head>

    <kuba-table-options-body>
        <option value="1" />
        <option value="Max" />
        <option value="Muster" />

        <option value="2" />
        <option value="Maxine" />
        <option value="Muster" />

        <option value="3" />
        <option value="Max" />
        <option value="Muster" />
    </kuba-table-options-body>
</kuba-table-options>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
