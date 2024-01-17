import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('');
});

test('Navigate and assert title', async ({ page }) => {
  await expect(page).toHaveTitle('Swag Labs');
});

test('Login with a standard user', async ({ page }) => {
  const userNameInput = page.getByTestId("username");
  const passwordInput = page.getByTestId("password");
  const loginButton = page.getByTestId("login-button");
  const shoppingCartButton = page.locator("#shopping_cart_container");

  await userNameInput.fill("standard_user");
  await passwordInput.fill("standard_user");
  await loginButton.click();

  await expect(shoppingCartButton).toBeVisible();
});