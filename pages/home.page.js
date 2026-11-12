import Page from './page.js';
import { HeaderComponent, ProductCardComponent } from './components/index.js';

class HomePage extends Page {
    constructor(page) {
        super(page);

        this.header = new HeaderComponent(page);
        this.cardsInStock = this.page.locator('.card:not(:has([data-testid="out-of-stock"]))');
    }


    getCardInStockByIndex(index){
        return new ProductCardComponent(this.cardsInStock.nth(index));
    }
    

    async selectProductInStockByIndex(index) {
        const productCard = this.getCardInStockByIndex(index);
        const name = await productCard.productName.textContent();
        await productCard.card.click();
        return name;
    }
}

export default HomePage;