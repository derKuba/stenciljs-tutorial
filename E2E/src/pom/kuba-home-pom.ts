import { Page } from "playwright";

class KubaHomePom {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private newButtonSelector = "app-root >> #addressbook_new_contact >> a";
  private tableSelector = "app-root >> kuba-table-options >> table tbody tr";

  async openNewContactForm() {
    await this.page.click(this.newButtonSelector);
  }

  async editContact() {
    await this.page.click(`${this.tableSelector} a`);
  }

  async deleteContact() {
    await this.page.click(`${this.tableSelector} button`);
  }

  async getTableLocator() {
    return await this.page.locator(this.tableSelector);
  }
}
export default KubaHomePom;
