import { Page } from "playwright";

class KubaFormPom {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private APP_NAME = "app-root";

  private backButtonSelector = `${this.APP_NAME} >> #backLink >> a`;
  private firstNameInputSelector = `${this.APP_NAME} >> #first-name`;
  private lastNameInputSelector = `${this.APP_NAME} >> #last-name`;
  private addressInputSelector = `${this.APP_NAME} >> #street`;
  private saveButtonSelector = `${this.APP_NAME} >> #saveContactButton`;

  async goBack() {
    await this.page.click(this.backButtonSelector);
  }

  async clickSaveButton() {
    await this.page.click(this.saveButtonSelector);
  }

  async fillFirstNameInput(value) {
    await this.page.fill(this.firstNameInputSelector, value);
  }

  async fillLastNameInput(value) {
    await this.page.fill(this.lastNameInputSelector, value);
  }

  async fillAddressInput(value) {
    await this.page.fill(this.addressInputSelector, value);
  }
}
export default KubaFormPom;
