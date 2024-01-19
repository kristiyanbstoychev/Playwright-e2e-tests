import { test, expect } from '@playwright/test';

const { LoginPage } = require("../pages/loginPage");
const { CheckOutFlow } = require("../pages/checkOut");
const { Products } = require("../pages/products");

const products = new Products();
const productsArray = [
  products.backPackItem,
  products.bikeLightItem,
  products.tShirtItem,
  products.jacketItem,
];

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto("");

  await loginPage.login("standard_user");
  await expect(loginPage.shoppingCartLink).toBeVisible();
});

test.describe("Checkout from the individual product page", () => {
  for (const data in productsArray) {
    test("Buy item from product page test: " + data, async ({ page }) => {
      const checkOutFlow = new CheckOutFlow(page);
      await checkOutFlow.checkOutFromProductPage(productsArray[data]);
    });
  }
});

test.describe("Checkout from the Home page", () => {
  for (const data in productsArray) {
    test("Buy item from the main page test: " + data, async ({ page }) => {
      const checkOutFlow = new CheckOutFlow(page);

      await checkOutFlow.checkoutFromTheMainPage(productsArray[data]);
    });
  }
});



