import { TestBed } from '@angular/core/testing';

import { CurrentWeatherDataApiService } from './current-weather-data-api.service';

describe('CurrentWeatherDataApiService', () => {
  let service: CurrentWeatherDataApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentWeatherDataApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
