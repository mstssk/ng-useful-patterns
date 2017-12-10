import { AppPage } from './app.po';

describe('ng-useful-patterns App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display app message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng-useful-patterns');
  });
});
