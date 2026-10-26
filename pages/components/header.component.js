export default class HeaderComponent {
    
    constructor(page) {
        this.page = page;

        this.homeLink = page.getByTestId('nav-home');
        this.contactLink = page.getByTestId('nav-contact');
        this.signInLink = page.getByTestId('nav-sign-in');
        this.cartLink = page.getByTestId('nav-cart');
        
        this.langDropdown = page.getByTestId('language-select');

        this.userMenu = page.getByTestId('nav-menu');
    }

    async goToSignIn() {
        await this.signInLink.click();
    }

    async goToCart() {
        await this.cartLink.click();
    }

    async switchLanguage(langCode) {
        await this.langDropdown.click();
        await this.page.getByTestId(`lang-${langCode}`).click();
    }   
}