import { FamousPaintersPage } from './app.po';

describe('famous-painters App', function() {
  let page: FamousPaintersPage;

  beforeEach(() => {
    page = new FamousPaintersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('famous-painters works!');
  });
});
