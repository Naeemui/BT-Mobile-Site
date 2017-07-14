import { TeioPage } from './app.po';

describe('teio App', () => {
  let page: TeioPage;

  beforeEach(() => {
    page = new TeioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
