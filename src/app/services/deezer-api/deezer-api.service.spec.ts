import { TestBed } from '@angular/core/testing';

import { DeezerApiService } from './deezer-api.service';

describe('DeezerApiService', () => {
  let service: DeezerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeezerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
