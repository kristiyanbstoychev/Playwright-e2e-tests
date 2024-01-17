import { test, expect } from '@playwright/test';
const { LoginPage } = require("../pages/loginPage");
const { Checkout } = require("../pages/checkOut");

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    const checkOut = new Checkout(page);
    await page.goto('');

    await loginPage.login("standard_user");
    await expect(loginPage.shoppingCartLink).toBeVisible();
    await expect(checkOut.itemImageUrl).toBeVisible();
    // await page.waitForTimeout(5000);
});

test('Buy product from home page', async ({ page }) => {
  const checkOut = new Checkout(page);
  await checkOut.verifyCheckoutFlow();
});

test('Buy item from product page', async ({ page }) => {
  const checkOut = new Checkout(page);
  checkOut.checkOutFromProductPage();
})

