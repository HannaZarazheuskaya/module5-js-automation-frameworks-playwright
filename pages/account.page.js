import { expect } from '@playwright/test';
import Page from './page.js';
import HeaderComponent from './components/header.component.js';

class AccountPage extends Page {
    constructor(page) {
        super(page);
        this.url = '/account';
        this.header = new HeaderComponent(page);  
        this.pageTitle = page.getByTestId('page-title');  
    }

    async expectToBeOpened() {
        await expect(this.pageTitle).toHaveText('My account', {
            timeout: 15000
        });
        await expect(this.page).toHaveURL(this.url);
    }
}

export default AccountPage;