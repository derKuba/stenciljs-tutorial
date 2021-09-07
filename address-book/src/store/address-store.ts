import { createStore } from "@stencil/store";

type Contact = {
  id: string;
  lastName: string;
  firstName: string;
  address: string;
};

type AdressStore = {
  contacts: Contact[];
};

const AdressStore: AdressStore = {
  contacts: [],
};

const { state } = createStore(AdressStore);

export default state;
