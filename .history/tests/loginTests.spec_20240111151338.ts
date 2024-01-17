import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
});

test('Navigate and assert title', async ({ page }) => {
  await expect(page).toHaveTitle('Swag Labs');
});

test('Login with a standard user', async ({ page }) => {
  const userNameInput = page.locator("[id='user-name']");
  const passwordInput = page.locator("[id='password']");
  const loginButton = page.locator("[id='login-button']");

  await userNameInput.fill('standard_user');
  await passwordInput.fill('secret_sauce');

  await loginButton.click();
});