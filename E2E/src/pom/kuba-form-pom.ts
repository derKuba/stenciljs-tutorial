import { Page } from "playwright";

class KubaFormPom {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private siteTitleSelektor = "h1";
  private newButtonSelektor = "stencil-route-link #addressbook_new_contact a";

  private async awaitApplicationReady() {
    await this.page.waitForSelector(this.siteTitleSelektor, {
      timeout: 1000,
    });
  }

  async goToNextPage() {
    await this.awaitApplicationReady();
    await this.page.click(this.newButtonSelektor);
  }
}
export default KubaFormPom;
