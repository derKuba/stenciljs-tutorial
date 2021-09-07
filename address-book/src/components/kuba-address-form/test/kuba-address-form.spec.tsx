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
    addressStoreMock.contacts = [];
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


  it("should submit the form on new Contact", async () => {
    const addressForm = new KubaAddressForm();
    addressForm.firstNameState = "Max";
    addressForm.lastNameState = "Muster";
    addressForm.addressState = "HalloWeltWeg 23"
    addressForm.onSubmit();

    expect(addressStoreMock.contacts).toEqual([{ "address": "HalloWeltWeg 23", "firstName": "Max", "id": "uuid", "lastName": "Muster" }]);
  });

  it("should submit the form on Contact edit", async () => {

    addressStoreMock.contacts.push({
      id: "14",
      firstName: "Max",
      lastName: "Muster",
      address: "Musterstraße 44"
    })

    const addressForm = new KubaAddressForm();

    addressForm.match = {
      ...addressForm.match,
      params: {
        id: "14"
      }
    }
    addressForm.firstNameState = "Maximilian";
    addressForm.lastNameState = "Neumuster";
    addressForm.addressState = "Musterstraße 44"
    addressForm.onSubmit();

    expect(addressStoreMock.contacts).toEqual([{ "address": "Musterstraße 44", "firstName": "Maximilian", "id": "14", "lastName": "Neumuster" }]);
  });

  it("should use a spy", async () => {
    const windowSpy = jest.spyOn(global.document, "getElementById");
    const addressForm = new KubaAddressForm();
    addressForm.onSubmit();

    expect(windowSpy).toBeCalled()
  });


  it("should trigger onChangeFirstName", async () => {
    const addressForm = new KubaAddressForm();
    addressForm.onChangeFirstName({ detail: { value: "Max" } });

    expect(addressForm.firstNameState).toBe("Max");
  });

  it("should trigger onChangeLastName", async () => {
    const addressForm = new KubaAddressForm();
    addressForm.onChangeLastName({ detail: { value: "Muster" } });

    expect(addressForm.lastNameState).toBe("Muster");
  });

  it("should trigger onChangeAddress", async () => {
    const addressForm = new KubaAddressForm();
    addressForm.onChangeAddress({ value: "Musterstraße 48" });

    expect(addressForm.addressState).toBe("Musterstraße 48");
  });

  it("should trigger connectedCallback", async () => {

    const loggerMock = jest.fn();
    addressStoreMock.contacts.push({
      id: "23",
      firstName: "Max",
      lastName: "Muster",
      address: "Musterstraße 44"
    })
    const addressForm = new KubaAddressForm();
    addressForm.logger = loggerMock;

    addressForm.match = {
      ...addressForm.match,
      params: {
        id: "10"
      }
    }
    addressForm.connectedCallback();

    addressForm.match = {
      ...addressForm.match,
      params: {
        id: "23"
      }
    }
    addressForm.connectedCallback();

    expect(addressForm.addressState = "Musterstraße 44");
    expect(addressForm.firstNameState = "Max");
    expect(addressForm.lastNameState = "Muster");
    expect(addressForm.idState = "23");

    expect(loggerMock).toBeCalledWith("connectedCallback");
  });
});
