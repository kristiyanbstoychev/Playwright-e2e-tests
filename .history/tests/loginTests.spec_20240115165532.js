import { test, expect } from '@playwright/test';
import { page } from '@playwright/test';
const { LoginPage } = require("../pages/loginPage");

const loginPage = new LoginPage(page);

test.beforeEach(async ({ page }) => {
    await page.goto('');
});

test('Navigate and assert title', async ({ page }) => {
  await expect(page).toHaveTitle('Swag Labs');
});

test('Login with a standard user', async ({ page }) => {
  await loginPage.login("standard_user");

  await expect(loginPage.shoppingCartLink).toBeVisible();
});

test('Login with locked out user', async ({ page }) => {
    const lockedOutErrorMessage = page.getByTestId("error");
    await login(page, "locked_out_user");

    await expect(lockedOutErrorMessage).toHaveText(
      "Epic sadface: Sorry, this user has been locked out."
    );
})

