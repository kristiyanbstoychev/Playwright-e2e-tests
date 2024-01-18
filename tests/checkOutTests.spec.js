import { test, expect } from '@playwright/test';

const { LoginPage } = require("../pages/loginPage");
const { CheckOutFlow } = require("../pages/checkOut");
const { Products } = require("../pages/products");

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto("");

  await loginPage.login("standard_user");
  await expect(loginPage.shoppingCartLink).toBeVisible();
});

// test("Buy backpack from home page", async ({ page }) => {
//   const checkOutFlow = new CheckOutFlow(page);
//   const products = new Products();

//   await checkOutFlow.checkoutFromTheMainPage(products.backPackItem);
// });

// test("Buy backpack from item page", async ({ page }) => {
//   const checkOutFlow = new CheckOutFlow(page);
//   const products = new Products();

//   await checkOutFlow.checkOutFromProductPage(products.backPackItem);
// });

// test("Buy bike light from home page", async ({ page }) => {
//   const checkOutFlow = new CheckOutFlow(page);
//   const products = new Products();

//   await checkOutFlow.checkoutFromTheMainPage(products.bikeLightItem);
// });

// test("Buy bike light from item page", async ({ page }) => {
//   const checkOutFlow = new CheckOutFlow(page);
//   const products = new Products();

//   await checkOutFlow.checkOutFromProductPage(products.bikeLightItem);
// });

// test("Buy t-shirt from the home page", async ({ page }) => {
//   const checkOutFlow = new CheckOutFlow(page);
//   const products = new Products();

//   await checkOutFlow.checkoutFromTheMainPage(products.tShirtItem);
// });

// test("Buy t-shirt from item page", async ({ page }) => {
//   const checkOutFlow = new CheckOutFlow(page);
//   const products = new Products();

//   await checkOutFlow.checkOutFromProductPage(products.tShirtItem);
// });

const products = new Products();
const productsArray = [
  products.backPackItem,
  products.bikeLightItem,
  products.tShirtItem,
];

for (const data in productsArray) {
  test("Buy item from product page test: " + data, async ({ page }) => {
    const checkOutFlow = new CheckOutFlow(page);

    await checkOutFlow.checkOutFromProductPage(productsArray[data]);
  });
}

for (const data in productsArray) {
  test("Buy item from the main page test: " + data, async ({ page }) => {
    const checkOutFlow = new CheckOutFlow(page);

    await checkOutFlow.checkoutFromTheMainPage(productsArray[data]);
  });
}




