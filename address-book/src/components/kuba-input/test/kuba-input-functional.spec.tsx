import { h } from "@stencil/core";
import { newSpecPage } from "@stencil/core/testing";
import { KubaInputFunctional } from "../kuba-input-functional";

describe("kuba-input-functional", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [],
      template: () => <KubaInputFunctional
        componentId="street"
        label="Adresse:"
        value={""}
        type={"text"}
        setter={() => { }}
      ></KubaInputFunctional >,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should trigger onInputEvent", async () => {

    const setterMock = jest.fn();
    const page = await newSpecPage({
      components: [],
      template: () => <KubaInputFunctional
        componentId="street"
        label="Adresse:"
        value={""}
        type={"text"}
        setter={setterMock}
      ></KubaInputFunctional >,
    });

    const event = new Event("input");

    page.root.querySelector("input").dispatchEvent(event);

    expect(setterMock).toHaveBeenCalled();
  });
});
