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
  const loginButton = page.getByTestId("login-button");

  await page.getByTestId("username").fill("standard_user");
  await page.getByTestId("password").fill("standard_user");
  await page.getByTestId("login-button").click();
});