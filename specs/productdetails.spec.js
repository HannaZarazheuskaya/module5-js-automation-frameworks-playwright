// #2 Feature: Product details page
//   Scenario: Add products to cart from the product details page
//     Given the user is on the home page
//     When the user views a product detail page 
//     And the user adds 3 items of this product to cart
//     And user opens cart
//     Then the cart should contain 3 items of this product

import {test, expect} from '../fixtures/index.js';

test('should add several product items to cart from product details page', async ({homePage, headerComponent, checkoutPage, productDetailsPage}) => {
    await homePage.open();
    const expectedProductName = await homePage.selectFirstProductInStock();
    await productDetailsPage.addItemsToCart(3);

    await headerComponent.goToCart();

    const actualQuantity = await checkoutPage.getProductQuantity();
    await expect(actualQuantity).toBe(3);
    await expect(checkoutPage.productTitle).toHaveText(expectedProductName);
});