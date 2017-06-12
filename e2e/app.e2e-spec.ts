import { TsintroPage } from './app.po';

describe('tsintro App', () => {
  let page: TsintroPage;

  beforeEach(() => {
    page = new TsintroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
