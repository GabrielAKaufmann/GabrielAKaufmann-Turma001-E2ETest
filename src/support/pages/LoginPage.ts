import { Page } from '@playwright/test';
import { LoginElements } from '../elements/LoginElements';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://accounts.spotify.com/pt-BR/login');
  }

  async login(username: string, password: string) {
/*     await this.page.fill(LoginElements.usernameInput, username);
    await this.page.fill(LoginElements.passwordInput, password);
    await this.page.click(LoginElements.submitButton);
    await this.page.waitForNavigation();
    await this.page.click(LoginElements.webPlayer); */
  }
}
