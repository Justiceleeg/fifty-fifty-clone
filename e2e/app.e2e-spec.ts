import { FiftyFiftyClonePage } from './app.po';

describe('fifty-fifty-clone App', () => {
  let page: FiftyFiftyClonePage;

  beforeEach(() => {
    page = new FiftyFiftyClonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
