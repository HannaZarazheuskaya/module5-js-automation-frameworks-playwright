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
        const firstCardInStock = this.page.locator('.card:not(:has([data-testid="out-of-stock"]))').first();
        return new ProductCardComponent(firstCardInStock);
    }

    async selectFirstProductInStock() {
        const firstCard = await this.findFirstProductInStock();
        
        if (!firstCard) {
            throw new Error('There are no products in stock');
        }
        const name = await firstCard.productName.textContent();
        await firstCard.card.click();
        
        return name;
    }
}

export default HomePage;