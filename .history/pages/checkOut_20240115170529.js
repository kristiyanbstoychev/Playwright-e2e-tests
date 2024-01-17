const { expect } = require("@playwright/test");

exports.Checkout = class Checkout {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;

    this.userNameInput = this.page.getByTestId("username");
    
  }

  async verifyThatUsersCanBuyAnItem(username) {
    
  }
};
