import { NgGistClientPage } from './app.po';

describe('ng-gist-client App', () => {
  let page: NgGistClientPage;

  beforeEach(() => {
    page = new NgGistClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
