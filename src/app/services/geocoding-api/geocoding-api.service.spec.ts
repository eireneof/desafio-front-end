import { TestBed } from '@angular/core/testing';

import { GeocodingApiService } from './geocoding-api.service';

describe('GeocodingApiService', () => {
  let service: GeocodingApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeocodingApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
