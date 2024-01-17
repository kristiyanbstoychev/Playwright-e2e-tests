import { test, expect } from '@playwright/test';

const { beforeEach } = require('@playwright/test');

beforeEach(async ({ page }) => {  await page.goto('https://www.saucedemo.com/');
});

test('Navigate and assert title', async ({ page }) => {
  await expect(page).toHaveTitle('Swag Labs');
});

test('Navigate and assert title', async ({ page }) => {
  
  await expect(page).toHaveTitle('Swag Labs');
});