import { createStore } from "@stencil/store";

type Contact = {
    lastName: string;
    firstname: string;
}

type AdressStore = {
    contacts: Contact[];
}

const AdressStore: AdressStore =  {
    contacts: []
}

const { state } = createStore(AdressStore);

export default state;