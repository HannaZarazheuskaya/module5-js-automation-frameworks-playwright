import {test as base} from '@playwright/test';
import {LoginPage, HomePage, CheckoutPage, ProductDetailsPage} from './index.js';
import { HeaderComponent } from './components/index.js';

export const test = base.extend({
    headerComponent: async ({page}, use) => {
        const headerComponent = new HeaderComponent(page);
        await use(headerComponent);
    },

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

export {expect} from '@playwright/test';