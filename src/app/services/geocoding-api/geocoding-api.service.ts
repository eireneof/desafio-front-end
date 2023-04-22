import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { HelperService } from '../helper/helper.service';
import { UrlParameter } from 'src/app/models/url-parameter';
import { HttpClient } from '@angular/common/http';
import { Coordinates } from 'src/app/models/coordinates';

@Injectable({
  providedIn: 'root',
})
export class GeocodingApiService {
  private _apiKey: string = 'cee5c1d49d7f32598bbf9c13c14d1148';
  private _baseUrl: string = 'https://api.openweathermap.org/geo/1.0/direct?';

  constructor(
    private _helperService: HelperService,
    private _http: HttpClient
  ) {}

  private _getURLParameters(adress: string): UrlParameter[] {
    return [
      {
        value: adress,
        url: 'q=',
      },
      {
        value: '1',
        url: 'limit=',
      },
      {
        value: this._apiKey,
        url: 'appid=',
      },
    ];
  }

  getCoordinatesByLocationName(adress: string): Observable<any> {
    const urlParameters: UrlParameter[] = this._getURLParameters(adress);
    const url = this._helperService.buildUrl(urlParameters, this._baseUrl);
    return this._http.get(url).pipe(
      map((response: any) => {
        console.log(response);
        let coordinates: Coordinates = new Coordinates();
        if (response && response[0] && response[0]['lat']) {
          coordinates.lat = response[0]['lat'];
        }
        if (response && response[0] && response[0]['lon']) {
          coordinates.lon = response[0]['lon'];
        }

        // console.log(response[0]['country'])

        // if(response && response[0] && response[0]['country']) {
        //   coordinates.country = response[0]['country'];
        // }

        return coordinates;
      }),
      catchError((error: any) => {
        return error;
      })
    );
  }
}
