import { ContentCreatorModule } from './content-creator.module';

describe('ContentCreatorModule', () => {
  let contentCreatorModule: ContentCreatorModule;

  beforeEach(() => {
    contentCreatorModule = new ContentCreatorModule();
  });

  it('should create an instance', () => {
    expect(contentCreatorModule).toBeTruthy();
  });
});
