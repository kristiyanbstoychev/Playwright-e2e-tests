const { expect } = require("@playwright/test");
const { LoginPage } = require("../pages/loginPage");
const { ProductPage } = require("./productPage");
const { Products } = require("../pages/products");

exports.CheckOutFlow = class CheckOutFlow {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;

    this.addToCartButton = this.page.locator(
      "//button[@class='btn btn_primary btn_small btn_inventory ']"
    );

    this.removeFromCartButton = this.page.locator(
      "//button[@class='btn btn_secondary btn_small btn_inventory ']"
    );

    this.removeItemFromCartButtonCheckoutPage = this.page.locator(
      "//button[@class='btn btn_secondary btn_small cart_button']"
    );

    this.addToCartBackpackItem = this.page.locator(
      "#add-to-cart-sauce-labs-backpack"
    );

    this.numberOfItemsInCart = this.page.locator(".shopping_cart_badge");

    this.checkOutButton = this.page.getByTestId("checkout");

    this.checkOutForm = this.page.locator(".checkout_info");

    this.checkOutFormFirstName = this.page.getByTestId("firstName");

    this.checkOutFormLastName = this.page.getByTestId("lastName");

    this.checkOutFormAdress = this.page.getByTestId("postalCode");

    this.checkOutFormContinueButton = this.page.getByTestId("continue");

    this.finishCheckoutButton = this.page.getByTestId("finish");

    this.checkoutCompleteMessage = this.page.locator(
      ".checkout_complete_container"
    );

    this.checkoutSuccessMessage = "Thank you for your order!";

    this.checkoutSuccessMessageDescription =
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!";

    this.backToProductsButton = this.page.getByTestId("back-to-products");
  }

  async verifyCheckoutFlow(itemObject) {
    const loginPage = new LoginPage(this.page);
    const productPage = new ProductPage(this.page);

    await expect(this.numberOfItemsInCart).toContainText("1");

    await loginPage.shoppingCartLink.click();

    await productPage.verifyItem("yourCartPage", itemObject);

    await expect(this.removeItemFromCartButtonCheckoutPage).toBeVisible();

    await this.checkOutButton.click();
    await expect(this.checkOutForm).toBeVisible();

    await this.checkOutFormFirstName.fill("test");
    await this.checkOutFormLastName.fill("test");
    await this.checkOutFormAdress.fill("test");
    await this.checkOutFormContinueButton.click();

    await expect(productPage.itemName).toContainText(itemObject.itemName);
    await expect(productPage.itemDescription).toContainText(
      itemObject.itemDescription
    );
    await this.finishCheckoutButton.click();

    await expect(this.checkoutCompleteMessage).toBeVisible();
    await expect(this.checkoutCompleteMessage).toContainText(
      this.checkoutSuccessMessage
    );
    await expect(this.checkoutCompleteMessage).toContainText(
      this.checkoutSuccessMessageDescription
    );
    await expect(this.backToProductsButton).toBeVisible();
  }

  async checkoutFromTheMainPage(itemObject) {
    const productPage = new ProductPage(this.page);
    const products = new Products();

    await productPage.verifyItem("mainPage", itemObject);

    await this.addToCartButton.nth(products.setButtonIndex(itemObject)).click();

    await this.verifyCheckoutFlow(itemObject);
  }

  async checkOutFromProductPage(itemObject) {
    const productPage = new ProductPage(this.page);
    await this.page
      .locator("//img[@alt='" + itemObject.itemName + "']")
      .click();

    await expect(
      this.page.locator("//img[@alt='" + itemObject.itemName + "']")
    ).toBeVisible();

    await expect(this.backToProductsButton).toBeVisible();

    await productPage.verifyItem("itemPage", itemObject);

    await productPage.addToCartFromItemPage.click();

    await expect(productPage.removeItemFromCartButtonItemPage).toBeVisible();

    await this.verifyCheckoutFlow(itemObject);
  }
};




  
