import { JpopUiPage } from './app.po';

describe('jpop-ui App', function() {
  let page: JpopUiPage;

  beforeEach(() => {
    page = new JpopUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
