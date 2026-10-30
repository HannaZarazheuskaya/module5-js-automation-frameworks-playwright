import Page from './page.js';

class CheckoutPage extends Page {
    constructor(page) {
        super(page);
        this.url = '/checkout';

        this.productTitle = page.getByTestId('product-title');
        this.productQuantityField = page.getByTestId('product-quantity');
        this.productRows = page.locator('table.cart-table tr');
        this.removeBtn = page.locator('.btn.btn-danger');
        this.cartEmptyMsg = page.getByText('The cart is empty. Nothing to display.');

    }

    async getProductQuantity() {
        const items = await this.productQuantityField.inputValue();
        return parseInt(items);
    }

    async removeFromCart() {
        await this.removeBtn.click();
    }
}
export default CheckoutPage;