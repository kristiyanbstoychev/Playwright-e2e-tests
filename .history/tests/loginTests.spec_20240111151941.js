import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    // await page.goto('https://playwright.dev/');
});

test('Navigate and assert title', async ({ page }) => {
  await expect(page).toHaveTitle('Swag Labs');
});

test('Login with a standard user', async ({ page }) => {
  const userNameInput = page.getByTestId("username");
  const passwordInput = page.getByTestId("password");
  const loginButton = page.locator("[id='login-button']");


  await userNameInput.fill("test");
});