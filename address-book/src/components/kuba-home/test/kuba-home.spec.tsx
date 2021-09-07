import { newSpecPage } from "@stencil/core/testing";
import { KubaHome } from "../kuba-home";

describe("kuba-home", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [KubaHome],
      html: `<kuba-home></kuba-home>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
