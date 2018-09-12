import { NewsScreenRoutingModule } from './news-screen-routing.module';

describe('NewsScreenRoutingModule', () => {
  let newsScreenRoutingModule: NewsScreenRoutingModule;

  beforeEach(() => {
    newsScreenRoutingModule = new NewsScreenRoutingModule();
  });

  it('should create an instance', () => {
    expect(newsScreenRoutingModule).toBeTruthy();
  });
});
