import { test, expect } from '@playwright/test';
const { LoginPage } = require("../pages/loginPage");
const { Checkout } = require("../pages/checkOut");

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('');

    await loginPage.login("standard_user");
    await expect(loginPage.shoppingCartLink).toBeVisible();
});

test('Buy backpack from home page', async ({ page }) => {
  const checkOut = new Checkout(page);
  await checkOut.checkoutFromTheMainPage(checkOut.backPackItem);
});

test('Buy backpack from item page', async ({ page }) => {
  const checkOut = new Checkout(page);
  await checkOut.checkOutFromProductPage(checkOut.backPackItem);
})

test('Buy bike light from home page', async ({ page }) => {
  const checkOut = new Checkout(page);
  await checkOut.checkoutFromTheMainPage(checkOut.bikeLightItem);
});

test("Buy bike light from item page", async ({ page }) => {
  const checkOut = new Checkout(page);
  await checkOut.checkOutFromProductPage(checkOut.bikeLightItem);
});


