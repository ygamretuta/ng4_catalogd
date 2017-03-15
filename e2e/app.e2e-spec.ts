import { Ng2Bs4StarterPage } from './app.po';

describe('ng2-bs4-starter App', () => {
  let page: Ng2Bs4StarterPage;

  beforeEach(() => {
    page = new Ng2Bs4StarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
