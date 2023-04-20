import { TrackModel } from "./track-model";
import { MusicGenres } from "./music-genres";

export class RecomendedTrackListModel {
    searchDate: string = '';
    tracks: TrackModel[] = [];
    temperature: string = '';
    city: string = '';
    musicsGenre: MusicGenres = 'CLASSIC';
  }