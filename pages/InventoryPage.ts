import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly cartBadge: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('[data-test="title"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  getProductCard(productName: string): Locator {
    return this.page.locator('.inventory_item').filter({ hasText: productName });
  }

  async addProductToCart(productName: string): Promise<void> {
    const productCard = this.getProductCard(productName);
    await productCard.locator('button').click();
  }

  async getCartBadgeCount(): Promise<string> {
    return (await this.cartBadge.textContent()) ?? '0';
  }

  async goToCart(): Promise<void> {
    await this.cartLink.click();
  }
}
