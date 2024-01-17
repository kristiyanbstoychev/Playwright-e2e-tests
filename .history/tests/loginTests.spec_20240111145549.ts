import { test, expect } from '@playwright/test';

test('Navigate and assert title', async ({ page }) => {

  await expect(page).toHaveTitle('Swag Labs');
});

test('Navigate and assert title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  
  await expect(page).toHaveTitle('Swag Labs');
});