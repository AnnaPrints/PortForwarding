import { TestingPatternsPage } from './app.po';

describe('suite name', () => {
});


describe('testing-patterns App', function() {
  let page: TestingPatternsPage;

  beforeEach(() => {
    page = new TestingPatternsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

it('spec name', () => {
});
