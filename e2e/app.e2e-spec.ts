import { AngularBootstrapPage } from './app.po';

describe('angular-bootstrap App', () => {
  let page: AngularBootstrapPage;

  beforeEach(() => {
    page = new AngularBootstrapPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
