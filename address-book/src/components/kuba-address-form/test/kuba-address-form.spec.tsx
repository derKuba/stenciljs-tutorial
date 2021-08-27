import { newSpecPage } from "@stencil/core/testing";


jest.mock('../utils/create-uuid', () => {
  const originalModule = jest.requireActual('../utils/create-uuid');

  //Mock the default export and named export 'foo'
  return {
    __esModule: true,
    ...originalModule,

    create_UUID: () => "uuid",
  };
});

const addressStoreMock = {
  contacts: []
};
jest.mock("../../../store/address-store", () => ({
  __esModule: true,
  default: addressStoreMock
}));

import { KubaAddressForm } from "../kuba-address-form";


describe("kuba-address-form", () => {

  beforeEach(() => {
    addressStoreMock.contacts = []
  })

  it("renders", async () => {
    const page = await newSpecPage({
      components: [KubaAddressForm],
      html: `<kuba-address-form></kuba-address-form>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  // hier kommt man an die Grenze von der newSpecPage
  xit("should submit the form with query on dom", async () => {
    const page = await newSpecPage({
      components: [KubaAddressForm],
      html: `<kuba-address-form></kuba-address-form>`,
    });

    console.log(page.body.querySelector("kuba-address-form").shadowRoot.querySelector("kuba-button").innerHTML); // möglich! output: speichern
    // page.body.querySelector("kuba-address-form").shadowRoot.querySelector("kuba-button").shadowRoot // undefined

    expect(true).toBe(true);
  });


  it("should submit the form", async () => {
    const addressForm = new KubaAddressForm();
    addressForm.firstNameState = "Max";
    addressForm.lastNameState = "Muster";
    addressForm.addressState = "HalloWeltWeg 23"
    addressForm.onSubmit();

    expect(addressStoreMock.contacts).toEqual([{ "address": "HalloWeltWeg 23", "firstname": "Max", "id": "uuid", "lastName": "Muster" }]);
  });

  it("should use a spy", async () => {
    const windowSpy = jest.spyOn(global.document, "getElementById");
    const addressForm = new KubaAddressForm();
    addressForm.onSubmit();

    expect(windowSpy).toBeCalled()
  });


});
