import { expect } from '@playwright/test';
import Page from './page.js';
import {HeaderComponent} from './components/index.js';

class ProductDetailsPage extends Page {
    constructor(page, headerComponent) {
        super(page);
        this.url = '/product';
        this.header = new HeaderComponent(page);

        this.productName = page.getByTestId('product-name');
        this.addToCartBtn = page.getByTestId('add-to-cart');
        this.increaseQuantityBtn = page.locator('#btn-increase-quantity');
    }

    async addItemsToCart(items) {
        await expect(this.increaseQuantityBtn).toBeEnabled({timeout: 10000});
        for (let i = 1; i < items; i++) {
            await this.increaseQuantityBtn.click();
        }
        await this.addToCartBtn.click();
    }
}
export default ProductDetailsPage;