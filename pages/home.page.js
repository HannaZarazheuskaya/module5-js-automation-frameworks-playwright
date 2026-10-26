import Page from './page.js';
import ProductCardComponent from './components/productcard.component.js';

class HomePage extends Page {
    constructor(page) {
        super(page);

    }

    get productCards() {
        return this.page.locator('.card');
    }

    async findFirstProductInStock() {
        const cardsQuantity = await this.productCards.count();

        for (let i = 0; i < cardsQuantity; i++) {

            const card = this.productCards.nth(i);
            const productCard = new ProductCardComponent(card);
            const isOutOfStockVisible = await productCard.isOutOfStock.isVisible();

            if (!isOutOfStockVisible) {
                return productCard;
            }
        }
    }

    async selectFirstProductInStock() {
        const firstCard = await this.findFirstProductInStock();
        const name = await firstCard.productName.textContent();
        
        await firstCard.card.click();
        return name;
    }
}

export default HomePage;