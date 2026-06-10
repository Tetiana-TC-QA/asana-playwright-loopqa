import { Page, Locator } from '@playwright/test'

/**
 * Page Object: Login page
 * Contains all selectors and actions related to authentication.
 */

export class LoginPage {

    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.signInButton = page.getByRole('button', { name: 'Sign in' });
    }

    async goTo(): Promise<void> {
        await this.page.goto("/");
    }

    async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.signInButton.click()
    }
}