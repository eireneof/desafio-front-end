import { TrackModel } from './track-model';
import { MusicGenres } from './music-genres';

export class RecomendedTrackListModel {
  searchDate: string = '';
  tracks: TrackModel[] = [];
  temperature: number = 0;
  city: string = '';
  country: string = '';
  musicsGenre: MusicGenres = 'CLASSIC';
}
