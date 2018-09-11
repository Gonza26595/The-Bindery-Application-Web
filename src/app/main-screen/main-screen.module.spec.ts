import { MainScreenModule } from './main-screen.module';

describe('MainScreenModule', () => {
  let mainScreenModule: MainScreenModule;

  beforeEach(() => {
    mainScreenModule = new MainScreenModule();
  });

  it('should create an instance', () => {
    expect(mainScreenModule).toBeTruthy();
  });
});
