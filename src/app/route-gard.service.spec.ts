import { TestBed, inject } from '@angular/core/testing';

import { RouteGardService } from './route-gard.service';

describe('RouteGardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteGardService]
    });
  });

  it('should be created', inject([RouteGardService], (service: RouteGardService) => {
    expect(service).toBeTruthy();
  }));
});
