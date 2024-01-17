import { test, expect } from '@playwright/test';


async function login(page) {
  const userNameInput = page.getByTestId("username");
  const passwordInput = page.getByTestId("password");
  const loginButton = page.getByTestId("login-button");

  await userNameInput.fill("standard_user");
  await passwordInput.fill("secret_sauce");
  await loginButton.click();
}


test.beforeEach(async ({ page }) => {
    await page.goto('');
});

test('Navigate and assert title', async ({ page }) => {
  await expect(page).toHaveTitle('Swag Labs');
});

test('Login with a standard user', async ({ page }) => {
  const shoppingCartButton = page.locator("#shopping_cart_container");
  
  await login();

  await expect(shoppingCartButton).toBeVisible();
});

test('Login with locked out user', async ({ page }) => {
  
})
