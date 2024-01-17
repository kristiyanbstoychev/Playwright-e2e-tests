import { test, expect } from '@playwright/test';
const { LoginPage } = require("../pages/loginPage");
const { Checkout } = require("../pages/checkOut");

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('');

    await loginPage.login("standard_user");
    await expect(loginPage.shoppingCartLink).toBeVisible();
});

test('Buy item', async ({ page }) => {
  const checkOut = new Checkout(page);
  await checkOut.verifyThatUsersCanCheckoutSuccessfully();
});

