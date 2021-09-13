import { Page } from "playwright";

class KubaHomePom {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private siteTitleSelektor = "h1";
  private newButtonSelektor = "app-root >> #addressbook_new_contact >> a";

  private async awaitApplicationReady() {
    await this.page.waitForSelector(this.siteTitleSelektor, {
      timeout: 1000,
    });
  }

  async openNewContactForm() {
    await this.awaitApplicationReady();
    await this.page.click(this.newButtonSelektor);
  }
}
export default KubaHomePom;
