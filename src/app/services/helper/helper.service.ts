import { Injectable } from '@angular/core';
import { UrlParameter } from 'src/app/models/url-parameter';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  
  private INT_MAX: number = 2147483647;


  constructor() { }

  getINT_MAX(): number {return this.INT_MAX;}

  buildUrl(estruturaUrl: UrlParameter[], url: string) {
    let firstFilter = false;
    let finalUrl: string = url;
    estruturaUrl.forEach((element: any) => {
      if (element.value || element.value === 0 || element.value === false) {
        if (firstFilter) {
          finalUrl = finalUrl + '&' + element.url + element.value;
        } else {
          firstFilter = true;
          finalUrl = finalUrl + element.url + element.value;
        }
      }
    });
    return finalUrl;
  }

  shuffleAndGetFiveElementsofAnArray(array: object[]): object[] {
    array.sort(() => Math.random() - 0.5);
    return array.slice(0, 5);
  }

  formatDuration(durationInSeconds: number): string {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = durationInSeconds % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${formattedMinutes}:${formattedSeconds}`;
  }
  
  
}
