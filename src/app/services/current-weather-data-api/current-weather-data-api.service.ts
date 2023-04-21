import { Injectable } from '@angular/core';
import { HelperService } from '../helper/helper.service';
import { HttpClient } from '@angular/common/http';
import { UrlParameter } from 'src/app/models/url-parameter';
import { Coordinates } from 'src/app/models/coordinates';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherDataApiService {

  private _apiKey: string = 'cee5c1d49d7f32598bbf9c13c14d1148';
  private _baseUrl: string = 'https://api.openweathermap.org/data/2.5/weather?';

  constructor(
    private _helperService: HelperService,
    private _http: HttpClient
  ) { }

  private _getURLParameters(coordinates: Coordinates): UrlParameter[] {
    return [
      {
        'value': coordinates.lat.toString(),
        'url': 'lat='
      },
      {
        'value': coordinates.lon.toString(),
        'url': 'lon='
      },
      {
        'value': this._apiKey,
        'url': 'appid='
      },
      {
        'value': 'metric',
        'url': 'units='
      }
    ]
  }

  getCurrentWeatherData(coordinates: Coordinates): Observable<any> {
    const urlParameters: UrlParameter[] =  this._getURLParameters(coordinates);
    const url = this._helperService.buildUrl(urlParameters, this._baseUrl);
    return this._http.get(url).pipe(
      map((response: any) => {
        console.log(response)
        let temperature: number = this._helperService.getINT_MAX();
        let country: string = '';
        if(response && response.main && response.main.temp) {
          temperature = response.main.temp;
        } 

        if(response && response.sys && response.sys.country) {
          country = response.sys.country;
        }

        return {temperature: temperature, country: country}
      }),
      catchError((error: any) => {
        return error;
      })
    );


  }
}
