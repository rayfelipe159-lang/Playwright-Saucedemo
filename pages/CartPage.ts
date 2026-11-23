import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly checkoutButton: Locator;
  readonly cartItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('[data-test="title"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.cartItems = page.locator('.cart_item');
  }

  getCartItem(productName: string): Locator {
    return this.cartItems.filter({ hasText: productName });
  }

  async proceedToCheckout(): Promise<void> {
    await this.checkoutButton.click();
  }
}
