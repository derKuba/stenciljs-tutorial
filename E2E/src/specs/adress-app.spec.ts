import { test, expect } from "@playwright/test";
import KubaFormPom from "../pom/kuba-form-pom";
import KubaHomePom from "../pom/kuba-home-pom";

// besser in einer env variable aufgehoben
const TEST_URL = "http://localhost:3333";

const addNewContact = async (kubaHomePom, kubaFormPom) => {
  await kubaHomePom.openNewContactForm();

  await kubaFormPom.fillFirstNameInput("Max");
  await kubaFormPom.fillLastNameInput("Muster");
  await kubaFormPom.fillAddressInput("Musterstraße 23, 1234 Musterstadt");
  await kubaFormPom.clickSaveButton();
  await kubaFormPom.goBack();
};

test.describe("Lucky Path Test", () => {
  let kubaHomePom, kubaFormPom;

  test.beforeEach(async ({ page }) => {
    await page.goto(TEST_URL);
    kubaHomePom = new KubaHomePom(page);
    kubaFormPom = new KubaFormPom(page);
  });

  test.afterEach(async ({ page }) => {
    await page.reload();
  });

  test("should go to New Form Page", async ({ page }) => {
    const kubaHomePom = new KubaHomePom(page);

    await kubaHomePom.openNewContactForm();
    await expect(page).toMatchText("h1", "Kontakt-Form ");
  });

  test("should add new contact", async ({ page }) => {
    await addNewContact(kubaHomePom, kubaFormPom);

    const tableLocator = await kubaHomePom.getTableLocator();
    await expect(tableLocator).toHaveCount(1);
  });

  test("should add new contact and edit it", async ({ page }) => {
    await addNewContact(kubaHomePom, kubaFormPom);

    await kubaHomePom.editContact();

    await kubaFormPom.fillFirstNameInput("Heinrich");
    await kubaFormPom.fillLastNameInput("Neumuster");
    await kubaFormPom.clickSaveButton();
    await kubaFormPom.goBack();

    const tableLocator = await kubaHomePom.getTableLocator();
    await expect(tableLocator).toContainText("HeinrichNeumuster");
  });

  test("should delete contact", async ({ page }) => {
    await addNewContact(kubaHomePom, kubaFormPom);

    await kubaHomePom.deleteContact();

    const tableLocator = await kubaHomePom.getTableLocator();
    await expect(tableLocator).toHaveCount(0);
  });
});
