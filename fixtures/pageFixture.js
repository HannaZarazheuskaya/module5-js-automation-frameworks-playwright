import { componentFixtures } from './componentFixture.js';
import {LoginPage, HomePage, CheckoutPage, ProductDetailsPage} from '../pages/index.js';

export const pageFixtures = componentFixtures.extend({
    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    homePage: async ({page}, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },

    productDetailsPage: async ({page}, use) => {
        const productDetailsPage = new ProductDetailsPage(page);
        await use(productDetailsPage);
    },

    checkoutPage: async ({page}, use) => {
        const checkoutPage = new CheckoutPage(page);
        await use(checkoutPage);
    }
});