import Page from './page.js';

class CheckoutPage extends Page {
    constructor(page) {
        super(page);
        this.url = '/checkout';
    }

    get productTitle() {
        return this.page.getByTestId('product-title');
    }

    get productQuantityField() {
        return this.page.getByTestId('product-quantity');
    }

    async getProductQuantity() {
        const items = await this.productQuantityField.inputValue();
        return parseInt(items);
    }
}
export default CheckoutPage;