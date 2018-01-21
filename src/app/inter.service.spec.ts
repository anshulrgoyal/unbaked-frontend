import { TestBed, inject } from '@angular/core/testing';

import { InterService } from './inter.service';

describe('InterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterService]
    });
  });

  it('should be created', inject([InterService], (service: InterService) => {
    expect(service).toBeTruthy();
  }));
});
