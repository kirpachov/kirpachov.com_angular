import { TestBed } from '@angular/core/testing';

import { PublicDataServiceService } from './public-data-service.service';

describe('PublicDataServiceService', () => {
  let service: PublicDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
