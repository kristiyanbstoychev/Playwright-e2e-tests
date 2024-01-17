const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;

    this.userNameInput = this.page.getByTestId("username");
    this.passwordInput = this.page.getByTestId("password");
    this.loginButton = this.page.getByTestId("login-button");
    this.shoppingCartLink = this.page.locator("#shopping_cart_container");
    this.lockedoutUserError = this.page.getByTestId("error");
  }


  async login(username) {
    await this.userNameInput.fill(username);
    await this.passwordInput.fill("secret_sauce");
    await this.loginButton.click();
    await page.waitForTimeout(2000); 
  }

};
