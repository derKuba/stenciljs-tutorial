import { newSpecPage } from "@stencil/core/testing";
import { KubaList } from "../kuba-list";

describe("kuba-list", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [KubaList],
      html: `<kuba-list></kuba-list>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
