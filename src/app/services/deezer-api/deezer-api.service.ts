import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, firstValueFrom, map } from 'rxjs';
import { HelperService } from '../helper/helper.service';
import { TrackModel } from 'src/app/models/track-model';
import { MusicGenres } from 'src/app/models/music-genres';
import { RecomendedTrackListModel } from 'src/app/models/recomended-track-model';

@Injectable({
  providedIn: 'root'
})
export class DeezerApiService {

  private _baseUrl: string = 'https://deezerdevs-deezer.p.rapidapi.com/playlist/';

  constructor(
    private _http: HttpClient,
    private _helperService: HelperService,
    ) { }

   async getPlaylistInfos(genreCode: any) {

    const url = this._baseUrl + genreCode;
    const headers = new HttpHeaders()
      .set('X-RapidAPI-Key', '44f558f601msha40a42a0ea7a1e2p11e7c3jsn8310aac1086b')
      .set('X-RapidAPI-Host', 'deezerdevs-deezer.p.rapidapi.com');
  
    const options = { headers: headers };

    try {
      const response = await firstValueFrom(this._http.get(url, options));
      let tracksList: TrackModel[] = [];
      if(response) {
        tracksList = this._getTrackListInfos(response);
      }
      return tracksList;
    } catch (err) {
      return err;
    }

  }

  private _getTrackListInfos(response: any): TrackModel[] {
    let fiveTracks = this._helperService.shuffleAndGetFiveElementsofAnArray(response.tracks.data);
    return this._getFilteredFiveTracks(fiveTracks);
  }

  private _getFilteredFiveTracks(trackList: any[]): TrackModel[] {
    let filteredList: TrackModel[] = [];
    trackList.forEach(track => {
      filteredList.push({
        id: track.id,
        link: track.link,
        preview: track.preview,
        title: track.title,
        explicit: track.explicit_lyrics,
        minutes: track.duration,
        duration: this._helperService.formatDuration(track.duration),
        imageLink: track.album.cover_small,
        artists: track.artist.name
      });
    })
    return filteredList;
  }
}
