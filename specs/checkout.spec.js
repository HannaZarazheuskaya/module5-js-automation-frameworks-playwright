// #3 Feature: Cart
//   Background: 
//     Given the user is on the home page
//     And the user opens a product detail page
//     And the user adds the product to cart
//     And the user opens the cart

//   Scenario: Remove a product from the shopping cart
//     Given the user is on the cart page 
//     When the user removes the product from the cart
//     Then the cart should contain no products
//     And the message “The cart is empty. Nothing to display.” should be displayed

import { test, expect } from "../fixtures/index.js";

test.describe('should remove a product from cart as a Guest user', async () => {
    
    test.beforeEach(async ({homePage, productDetailsPage, headerComponent}) => {
        await homePage.open();
        await homePage.selectFirstProductInStock();
        await productDetailsPage.addItemsToCart(2);
        await headerComponent.goToCart();
    });

    test('should remove a product from cart as a Guest user', async ({checkoutPage}) => {
        await checkoutPage.removeFromCart();
        await expect(checkoutPage.cartEmptyMsg).toBeVisible();
        await expect(checkoutPage.productRows).toHaveCount(0);        
    });
});