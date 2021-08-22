import { newSpecPage } from "@stencil/core/testing";
import { h } from "@stencil/core";

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

  it("should render the button", async () => {
    const page = await newSpecPage({
      components: [KubaButton],
      template: () => <kuba-button handleSubmit={() => {}}></kuba-button>,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("should handle click", async () => {
    const clickMock = jest.fn();
    const page = await newSpecPage({
      components: [KubaButton],
      template: () => <kuba-button handleSubmit={clickMock}></kuba-button>,
    });

    page.body
      .querySelector("kuba-button")
      .shadowRoot.querySelector("button")
      .click();

    expect(clickMock).toHaveBeenCalled();
  });

  it("should handle alternatively", async () => {
    const clickMock = jest.fn();

    const kubaButton = new KubaButton();
    kubaButton.handleSubmit = clickMock;

    kubaButton.handleClickEvent();

    expect(clickMock).toHaveBeenCalled();
  });
});
