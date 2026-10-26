export default class ProductCardComponent {
    constructor(card) {
        this.card = card;
        
        this.productName = this.card.getByTestId('product-name');
        this.isOutOfStock = this.card.getByTestId('out-of-stock');
    }

    async isInStock() {
        const isOutOfStockVisible = await this.isOutOfStock.isVisible();
        if (isOutOfStockVisible) {
            return false;
        } else {
            return true;
        }
    }
}