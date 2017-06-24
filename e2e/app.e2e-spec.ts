import { RestoFrontendPage } from './app.po';

describe('resto-frontend App', () => {
  let page: RestoFrontendPage;

  beforeEach(() => {
    page = new RestoFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
