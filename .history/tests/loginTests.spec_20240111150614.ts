import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
});

test('Navigate and assert title', async ({ page }) => {
  await expect(page).toHaveTitle('Swag Labs');
});

test('test', async ({ page }) => {
  const userNameInput = await page.locator("#user-name").click()

  await userNameInput.click();
});