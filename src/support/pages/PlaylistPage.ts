import { Page } from '@playwright/test';
import { PlaylistElements } from '../elements/PlaylistElements';

export class PlaylistPage {
  constructor(private page: Page) {}

  async createPlaylistAndAddMusic() {
    await this.page.click(PlaylistElements.buttonPlus);

    await this.page.click(PlaylistElements.createPlaylistButton);

    const musicName = `Do Fundo da Grota`;

    await this.page.fill(PlaylistElements.placeHolderAddMusic, musicName);

    const firstTrack = await this.page
      .locator(PlaylistElements.tracklistLocator)
      .first();

    await firstTrack.locator(PlaylistElements.addTrack).click();

    return musicName;
  }
}
