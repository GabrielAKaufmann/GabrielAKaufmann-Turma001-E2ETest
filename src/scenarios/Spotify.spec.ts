import { test, expect } from '@playwright/test';
import { LoginPage } from '../support/pages/LoginPage';
import { PlaylistPage } from '../support/pages/PlaylistPage';
import dotenv from 'dotenv';

// Carrega variáveis do .env
dotenv.config();

test.describe('Spotify E2E Tests', () => {
  test('Login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(
      process.env.SPOTIFY_USER ?? '',
      process.env.SPOTIFY_PASS ?? ''
    );

    await expect(page.locator('#main')).toBeVisible();
  });

  test('Criar playlist e adicionar música', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const playlistPage = new PlaylistPage(page);

    await loginPage.navigate();
    await loginPage.login(
      process.env.SPOTIFY_USER ?? '',
      process.env.SPOTIFY_PASS ?? ''
    );

    await playlistPage.createPlaylistAndAddMusic();
  });
});
