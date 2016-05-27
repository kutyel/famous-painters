export class FamousPaintersPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('famous-painters-app h1')).getText();
  }
}
