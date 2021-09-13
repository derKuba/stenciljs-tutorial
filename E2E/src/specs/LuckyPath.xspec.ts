import { test, expect } from "@playwright/test";
import KubaHomePom from "../pom/kuba-home-pom";

// besser in einer env variable aufgehoben
const TEST_URL = "http://localhost:3333";

test.describe("Lucky Path Test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(TEST_URL);
  });

  test("should go to New Form Page", async ({ page }) => {
    const kubaHomePom = new KubaHomePom(page);

    await kubaHomePom.openNewContactForm();

    await expect(page).toMatchText("h1", "Kontakt-Form ");
  });
});
