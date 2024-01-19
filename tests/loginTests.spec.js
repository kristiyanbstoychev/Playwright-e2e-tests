import { test, expect } from '@playwright/test';
const { LoginPage } = require("../pages/loginPage");

test.beforeEach(async ({ page }) => {
    await page.goto('');
});

test("Navigate and assert title", async ({ page }) => {
  await expect(page).toHaveTitle("Swag Labs");
  await expect(page).toHaveScreenshot();
});

test("Login with a standard user", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login("standard_user");

  await expect(loginPage.shoppingCartLink).toBeVisible();
  await expect(page).toHaveScreenshot();
});

test("Login with locked out user", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login("locked_out_user");

  await expect(loginPage.lockedoutUserError).toHaveText(
    "Epic sadface: Sorry, this user has been locked out."
  );
  await expect(page).toHaveScreenshot();
});

