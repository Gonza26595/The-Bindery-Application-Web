import { TestBed, inject } from '@angular/core/testing';

import { ContentCreatorService } from './content-creator.service';

describe('ContentCreatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentCreatorService]
    });
  });

  it('should be created', inject([ContentCreatorService], (service: ContentCreatorService) => {
    expect(service).toBeTruthy();
  }));
});
