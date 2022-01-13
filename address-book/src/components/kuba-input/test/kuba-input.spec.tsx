import { newSpecPage } from "@stencil/core/testing";
import { KubaInput } from "../kuba-input";

describe("kuba-input", () => {
  it("renders with toMatchSnapshot", async () => {
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

  it("renders with toMatchInlineSnapshot", async () => {
    const page = await newSpecPage({
      components: [KubaInput],
      html: `<kuba-input
      componentId="last-name"
      label="Nachname:"
      onInputEvent={()=>{}}
      value={""}
    ></kuba-input>`,
    });
    expect(page.root).toMatchInlineSnapshot(`
      <kuba-input componentid="last-name" label="Nachname:" oninputevent="{()=">
        <!---->
        <div class="kuba-input">
          <label>
            Nachname:
          </label>
          <input type="text">
        </div>
        {}} value={""} &gt;
      </kuba-input>
    `);
  });
});
