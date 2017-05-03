import { BabelBlogPage } from './app.po';

describe('babel-blog App', function() {
  let page: BabelBlogPage;

  beforeEach(() => {
    page = new BabelBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
