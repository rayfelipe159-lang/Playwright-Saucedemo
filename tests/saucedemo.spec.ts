import { test, expect } from '../fixtures/baseTest';

test.describe('SauceDemo - Suite de Testes E2E', () => {
  const validUser = process.env.SAUCE_USERNAME || '';
  const validPassword = process.env.SAUCE_PASSWORD || '';
  const targetProduct = 'Sauce Labs Backpack';
  const targetPrice = '$29.99';

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();
  });

  test('Deve realizar login com sucesso', async ({ loginPage, inventoryPage, page }) => {
    await loginPage.login(validUser, validPassword);

    await expect(page).toHaveURL(/.*inventory.html/);
    await expect(inventoryPage.pageTitle).toHaveText('Products');
  });

  test('Deve adicionar um produto ao carrinho com sucesso', async ({ loginPage, inventoryPage, cartPage, page }) => {
    await loginPage.login(validUser, validPassword);

    await inventoryPage.addProductToCart(targetProduct);
    await expect(inventoryPage.cartBadge).toHaveText('1');

    await inventoryPage.goToCart();
    await expect(page).toHaveURL(/.*cart.html/);
    await expect(cartPage.pageTitle).toHaveText('Your Cart');
    await expect(cartPage.getCartItem(targetProduct)).toBeVisible();
  });

  test('Deve validar as informacoes no checkout e finalizar o pedido', async ({
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage,
    page,
  }) => {
    await loginPage.login(validUser, validPassword);

    await inventoryPage.addProductToCart(targetProduct);
    await inventoryPage.goToCart();

    await cartPage.proceedToCheckout();
    await expect(page).toHaveURL(/.*checkout-step-one.html/);
    await expect(checkoutPage.pageTitle).toHaveText('Checkout: Your Information');

    await checkoutPage.fillCustomerInformation('Teste', 'Quality', '12345');
    await expect(page).toHaveURL(/.*checkout-step-two.html/);
    await expect(checkoutPage.pageTitle).toHaveText('Checkout: Overview');

    await expect(checkoutPage.summaryItemName).toHaveText(targetProduct);
    await expect(checkoutPage.summaryItemPrice).toHaveText(targetPrice);
    await expect(checkoutPage.subtotalLabel).toContainText(`Item total: ${targetPrice}`);
    await expect(checkoutPage.taxLabel).toBeVisible();
    await expect(checkoutPage.totalLabel).toBeVisible();

    await checkoutPage.finishOrder();
    await expect(page).toHaveURL(/.*checkout-complete.html/);
    await expect(checkoutPage.pageTitle).toHaveText('Checkout: Complete!');
    await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
  });
});
