import Page from './page.js';

class ProductDetailsPage extends Page {
    constructor(page) {
        super(page);
        this.url = '/product';

        this.productName = page.getByTestId('product-name');
        this.addToCartBtn = page.getByTestId('add-to-cart');
        this.increaseQuantityBtn = page.locator('#btn-increase-quantity');

    }

    async addItemsToCart(items) {
        for (let i = 1; i < items; i++) {
            await this.increaseQuantityBtn.click();
        }
        await this.addToCartBtn.click();
    }
}
export default ProductDetailsPage;