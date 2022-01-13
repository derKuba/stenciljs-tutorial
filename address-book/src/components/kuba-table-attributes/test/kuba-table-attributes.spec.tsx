import { newSpecPage } from "@stencil/core/testing";
import { h } from "@stencil/core";
import { KubaTableAttributes } from "../kuba-table-attributes";

describe("kuba-table-attributes", () => {
  it("renders", async () => {
    const head = ["id", "Name", "Vorname"];
    const body = [
      ["1", "Max", "Muster"],
      ["2", "Maxine", "Muster"],
      ["3", "Momo", "Muster"],
    ];

    const page = await newSpecPage({
      components: [KubaTableAttributes],
      template: () => <kuba-table-attributes head={head} body={body} />,
    });
    expect(page.root).toMatchSnapshot();
  });
});
