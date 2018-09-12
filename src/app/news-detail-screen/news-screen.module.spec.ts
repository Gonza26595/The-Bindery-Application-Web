import { NewsScreenModule } from './news-screen.module';

describe('NewsScreenModule', () => {
  let newsScreenModule: NewsScreenModule;

  beforeEach(() => {
    newsScreenModule = new NewsScreenModule();
  });

  it('should create an instance', () => {
    expect(newsScreenModule).toBeTruthy();
  });
});
