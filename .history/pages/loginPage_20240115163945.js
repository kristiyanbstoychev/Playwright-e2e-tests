const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;

    this.userNameInput = page.getByTestId("username");
    this.passwordInput = page.getByTestId("password");
    this.loginButton = page.getByTestId("login-button");
    this.shoppingCartLink = page.locator("#shopping_cart_container");
  }


  async login() {
    await this.userNameInput.fill(username);
    await this.passwordInput.fill("secret_sauce");
    await this.loginButton.click();

    await expect(this.shoppingCartLink).toBeVisible();
  }

  async pageObjectModel() {
    await this.getStarted();
    await this.pomLink.click();
  }
};
