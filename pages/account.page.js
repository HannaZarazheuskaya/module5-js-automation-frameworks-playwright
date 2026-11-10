import { expect } from '@playwright/test';
import Page from './page.js';
import HeaderComponent from './components/header.component.js';

class AccountPage extends Page {
    constructor(page) {
        super(page);
        this.url = '/account';
        this.header = new HeaderComponent(page);    
    }

    async expectToBeOpened() {
        await expect(this.page).toHaveURL(this.url, {
            timeout: 15000
        });
    }
}

export default AccountPage;