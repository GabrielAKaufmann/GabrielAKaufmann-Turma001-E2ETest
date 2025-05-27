import { Page } from '@playwright/test';
import { LoginElements } from '../elements/LoginElements';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://accounts.spotify.com/pt-BR/login');
  }

  async login(username: string, password: string) {
    await this.page.fill(LoginElements.usernameInput, username);
    await this.page.fill(LoginElements.passwordInput, password);
    await this.page.click(LoginElements.submitButton);

    // Aguarda ou a navegação ou uma mensagem de erro
    await Promise.race([
      await this.page.waitForSelector('#main', { timeout: 10000 }),
      this.page.locator('text=Nome de usuário ou senha incorretos.').waitFor({ timeout: 10000 })
    ]);

    const erroLogin = await this.page.locator('text=Nome de usuário ou senha incorretos.').isVisible();
    if (erroLogin) {
      throw new Error('❌ Login falhou: usuário ou senha incorretos.');
    }

    // Navegação bem-sucedida
    await this.page.click(LoginElements.webPlayer);
  }
};
