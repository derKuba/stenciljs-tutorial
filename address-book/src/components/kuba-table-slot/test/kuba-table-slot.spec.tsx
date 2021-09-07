import { newSpecPage } from "@stencil/core/testing";
import { KubaTableSlot } from "../kuba-table-slot";

describe("kuba-table-slot", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [KubaTableSlot],
      html: `<kuba-table-slot>
      <tr slot="table-head">
          <th>id</th>
          <th>Name</th>
          <th>Vorname</th>
      </tr>
      <tr>
          <td>1</td>
          <td>Max</td>
          <td>Muster</td>
      </tr>
      <tr>
          <td>2</td>
          <td>Maxine</td>
          <td>Muster</td>
      </tr>
      <tr>
          <td>3</td>
          <td>Momo</td>
          <td>Muster</td>
      </tr>
  </kuba-table-slot>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
