const { expect } = require("@playwright/test");
const { LoginPage } = require("../pages/loginPage");

exports.Checkout = class Checkout {
  /**
   * @param {import('@playwright/test').Page} page
   */
  loginPage = new LoginPage(page);

  constructor(page) {
    this.page = page;

    this.userNameInput = this.page.getByTestId("username");
    
  }

  async verifyThatUsersCanBuyAnItem(username) {
    this.loginPage.login("standard_user");

    
  }
};
