import { TestBed, inject } from '@angular/core/testing';

import { CatMashService } from './cat-mash.service';

describe('CatMashService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatMashService]
    });
  });

  it('should be created', inject([CatMashService], (service: CatMashService) => {
    expect(service).toBeTruthy();
  }));
});
