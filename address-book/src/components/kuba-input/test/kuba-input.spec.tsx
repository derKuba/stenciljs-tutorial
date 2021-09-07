import { newSpecPage } from "@stencil/core/testing";
import { KubaInput } from "../kuba-input";

describe("kuba-input", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [KubaInput],
      html: `<kuba-input
      componentId="last-name"
      label="Nachname:"
      onInputEvent={()=>{}}
      value={""}
    ></kuba-input>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
