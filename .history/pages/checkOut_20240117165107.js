const { expect } = require("@playwright/test");
const { LoginPage } = require("../pages/loginPage");
const { time } = require("console");

exports.Checkout = class Checkout {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;

    this.addToCartBackpackItem = this.page.locator(
      "#add-to-cart-sauce-labs-backpack"
    );

    this.removeFromCartBackpackItem = this.page.locator(
      "#remove-sauce-labs-backpack"
    );

    this.numberOfItemsInCart = this.page.locator(".shopping_cart_badge");

    this.itemName = this.page.locator(".inventory_item_name").nth(0);

    this.itemDescription = this.page.locator(".inventory_item_desc").nth(0);

    this.itemPrice = this.page.locator(".inventory_item_price").nth(0);

    this.itemImageUrl = this.page
      .locator("//img[@alt='Sauce Labs Backpack']")
      .first();
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

    this.productPageProductNameField = this.page.locator(
      "//div[@class='inventory_details_name large_size']"
    );

    this.productPageProductDescriptionField = this.page.locator(
      "//div[@class='inventory_details_desc large_size']"
    );

    this.productPageProductPriceField = this.page.locator(
      "//div[@class='inventory_details_price']"
    );

    this.backToProductsButton = this.page.getByTestId("back-to-products");

    this.backPackItem = {
      itemName: "Sauce Labs Backpack",
      itemDescription:
        "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.",
      itemPrice: "29.99",
      itemImageUrl: "/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg",
    };
    
    this.bikeLightItem = {
      itemName: "Sauce Labs Bike Light",
      itemDescription:
        "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.",
      itemPrice: "9.99",
      itemImageUrl: "/static/media/bike-light-1200x1500.37c843b0.jpg",
    };
  }

  async verifyCheckoutFlow() {
    const loginPage = new LoginPage(this.page);

    await this.addToCartBackpackItem.click();

    await expect(this.removeFromCartBackpackItem).toBeVisible();

    await expect(this.numberOfItemsInCart).toContainText("1");

    await loginPage.shoppingCartLink.click();

    await this.verifyItem("mainPage");
    await expect(this.removeFromCartBackpackItem).toBeVisible();

    await this.checkOutButton.click();
    await expect(this.checkOutForm).toBeVisible();

    await this.checkOutFormFirstName.fill("test");
    await this.checkOutFormLastName.fill("test");
    await this.checkOutFormAdress.fill("test");
    await this.checkOutFormContinueButton.click();

    await expect(this.itemName).toContainText(this.backPackItem.itemName);
    await expect(this.itemDescription).toContainText(
      this.backPackItem.itemDescription
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
  
  async verifyItem(itemLocation) {
    let itemNameLocator = "";
    let itemDescriptionLocator = "";
    let itemPriceLocator = "";

    switch (itemLocation) {
      case "mainPage":
        itemNameLocator = this.itemName;
        itemDescriptionLocator = this.itemDescription;
        itemPriceLocator = this.itemPrice;
        break;

      case "itemPage":
        itemNameLocator = this.productPageProductNameField;
        itemDescriptionLocator = this.productPageProductDescriptionField;
        itemPriceLocator = this.productPageProductPriceField;
        break;
    }

    await expect(itemNameLocator).toContainText(this.backPackItem.itemName);
    await expect(itemDescriptionLocator).toContainText(
      this.backPackItem.itemDescription
    );
    await expect(itemPriceLocator).toContainText(this.backPackItem.itemPrice);
  }

  async checkoutFromTheMainPage() {
    await this.verifyItem("mainPage");
    await expect(this.itemImageUrl).toBeVisible();

    await this.verifyCheckoutFlow();
  }

  async checkOutFromProductPage() {
    await expect(this.itemImageUrl).toBeVisible();
    await this.itemImageUrl.click();

    await expect(this.itemImageUrl).toBeVisible();
    await expect(this.backToProductsButton).toBeVisible();
    await this.verifyItem("itemPage");

    await expect(this.addToCartBackpackItem).toBeVisible();

    await this.verifyCheckoutFlow();
  }
};


  
