const { expect } = require("@playwright/test");
const { Products } = require("./products");
const { LoginPage } = require("./loginPage");

exports.ProductPage = class ProductPage {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;

    this.addToCartFromItemPage = this.page.locator(
      "//button[@class='btn btn_primary btn_small btn_inventory']"
    );
    this.removeItemFromCartButtonItemPage = this.page.locator(
      "//button[@class='btn btn_secondary btn_small btn_inventory']"
    );
    this.productPageProductNameField = this.page.locator(
      "//div[@class='inventory_details_name large_size']"
    );

    this.productPageProductDescriptionField = this.page.locator(
      "//div[@class='inventory_details_desc large_size']"
    );

    this.productPageProductPriceField = this.page.locator(
      "//div[@class='inventory_details_price']"
    );

    this.itemName = this.page.locator(".inventory_item_name");

    this.itemDescription = this.page.locator(".inventory_item_desc");

    this.itemPrice = this.page.locator(".inventory_item_price");
  }

  async verifyItem(itemLocation, itemObject) {
    const products = new Products();

    let itemNameLocator;
    let itemDescriptionLocator;
    let itemPriceLocator;

    switch (itemLocation) {
      case "mainPage":
        itemNameLocator = this.itemName.nth(
          products.setButtonIndex(itemObject)
        );
        itemDescriptionLocator = this.itemDescription.nth(
          products.setButtonIndex(itemObject)
        );
        itemPriceLocator = this.itemPrice.nth(
          products.setButtonIndex(itemObject)
        );
        break;

      case "itemPage":
        itemNameLocator = this.productPageProductNameField;
        itemDescriptionLocator = this.productPageProductDescriptionField;
        itemPriceLocator = this.productPageProductPriceField;
        break;
      case "yourCartPage":
        itemNameLocator = this.itemName.nth(0);
        itemDescriptionLocator = this.itemDescription.nth(0);
        itemPriceLocator = this.itemPrice.nth(0);
        break;
    }

    await expect(itemNameLocator).toContainText(itemObject.itemName);
    await expect(itemDescriptionLocator).toContainText(
      itemObject.itemDescription
    );
    await expect(itemPriceLocator).toContainText(itemObject.itemPrice);
  }
};
