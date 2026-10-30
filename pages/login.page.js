import Page from './page.js';

class LoginPage extends Page {
    constructor(page) {
        super(page);
        this.url = '/auth/login';

        this.emailInput = page.getByTestId('email');
        this.passwordInput = page.getByTestId('password');
        this.loginBtn = page.getByTestId('login-submit');
    }

    async login(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
    }
}

export default LoginPage;