import { ContentCreatorRoutingModule } from './content-creator-routing.module';

describe('ContentCreatorRoutingModule', () => {
  let contentCreatorRoutingModule: ContentCreatorRoutingModule;

  beforeEach(() => {
    contentCreatorRoutingModule = new ContentCreatorRoutingModule();
  });

  it('should create an instance', () => {
    expect(contentCreatorRoutingModule).toBeTruthy();
  });
});
