import { MicrosoftAngular2Page } from './app.po';

describe('microsoft-angular2 App', function() {
  let page: MicrosoftAngular2Page;

  beforeEach(() => {
    page = new MicrosoftAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
