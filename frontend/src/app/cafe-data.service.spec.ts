import { TestBed } from '@angular/core/testing';

import { CafeDataService } from './cafe-data.service';

describe('CafeDataService', () => {
  let service: CafeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CafeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
