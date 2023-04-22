import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Coordinates } from 'src/app/models/coordinates';
import { MusicGenres } from 'src/app/models/music-genres';
import { RecomendedTrackListModel } from 'src/app/models/recomended-track-model';
import { CurrentWeatherDataApiService } from 'src/app/services/current-weather-data-api/current-weather-data-api.service';
import { DeezerApiService } from 'src/app/services/deezer-api/deezer-api.service';
import { GeocodingApiService } from 'src/app/services/geocoding-api/geocoding-api.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { GenreDictionary } from 'src/app/shared/dictionaries/genre-dictionary';
import { LoadingComponent } from '../shared/loading/loading.component';
import { ModalComponent } from '../shared/modal/modal.component';

// TODO: criar mais uma coluna com o nome country e só preencher city se ela for informada
// TODO: ao clicar em salvar ou fechar o modal, resetar os dados de current
// TODO: ver como dar trhow error
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('loadingModal', { static: false })
  loadingModal: LoadingComponent;

  @ViewChild('tracksResultModal', { static: false })
  tracksResultModal: ModalComponent;

  @ViewChild('errorModal', { static: false })
  errorModal: ModalComponent;

  constructor(
    private _geocodingApiService: GeocodingApiService,
    private _currentWeatherDataApiService: CurrentWeatherDataApiService,
    private _deezerApiService: DeezerApiService,
    private _localStorageService: LocalStorageService,
    private _formBuilder: FormBuilder
  ) {}

  curentRecommendation: RecomendedTrackListModel =
    new RecomendedTrackListModel();
  form: FormGroup;
  btnDisabled: boolean = false;
  textLoading: string = 'Searching';

  // TODO: preencher nome da cidade OU coordenadas

  ngOnInit(): void {
    this.buildForm();
  }

  get f() {
    return this.form.controls;
  }

  buildForm() {
    this.form = this._formBuilder.group({
      lat: [],
      lon: [],
      city: [],
    });
  }

  closeErrorModal() {
    this.errorModal.close();
  }

  handleInvalidCityError() {
    this.f['city'].setErrors({ invalidCity: true });
  }

  getCoordinatesByLocationName(address: string) {
    this.textLoading = 'Searching';
    this.loadingModal.open();
    this._geocodingApiService.getCoordinatesByLocationName(address).subscribe({
      next: (response: Coordinates) => {
        this.loadingModal.close();
        if (
          typeof response.lat == 'undefined' ||
          typeof response.lon == 'undefined'
        ) {
          this.handleInvalidCityError();
          return;
        }

        if (response) {
          this.curentRecommendation.city = address;
          this.getCurrentWeatherData(response, true);
          return;
        }

        this.errorModal.open();
      },
      error: (error: any) => {
        this.loadingModal.close();
        this.errorModal.open();
      },
    });
  }

  getCurrentWeatherData(
    coordinates: Coordinates,
    haveCityInformation?: boolean
  ) {
    this.textLoading = 'Checking';
    this.loadingModal.open();
    this._currentWeatherDataApiService
      .getCurrentWeatherData(coordinates)
      .subscribe({
        next: (response: any) => {
          this.loadingModal.close();
          if (!response) {
            this.errorModal.open();
          }
          if (response && response.temperature) {
            this.curentRecommendation.temperature = response.temperature;
            this.setMusicGenreByTemperature(response.temperature);
          }

          if (response && response.country) {
            this.curentRecommendation.country = response.country;
          }
        },
        error: (error: any) => {
          this.errorModal.open();
          this.loadingModal.close();
        },
      });
  }

  setMusicGenreByTemperature(temperature: number) {
    let musicSuggestion: MusicGenres;
    if (temperature > 32) {
      musicSuggestion = 'ROCK';
    } else if (temperature > 24) {
      musicSuggestion = 'POP';
    } else if (temperature > 16) {
      musicSuggestion = 'CLASSIC';
    } else {
      musicSuggestion = 'LOFI';
    }
    this.curentRecommendation.musicsGenre = musicSuggestion;
    this.getMusicSuggestionsList(musicSuggestion);
  }

  async getMusicSuggestionsList(musicType: MusicGenres) {
    this.textLoading = 'Preparing';
    this.loadingModal.open();
    let suggestionList = await this._deezerApiService.getPlaylistInfos(
      GenreDictionary[musicType]
    );
    this.loadingModal.close();

    if (!suggestionList) {
      this.errorModal.open();
      return;
    }
    // console.log(suggestionList);
    this.curentRecommendation.tracks = suggestionList;
    this.curentRecommendation.searchDate = new Date().toString();
    this.tracksResultModal.open();
  }

  createLocalStorage() {
    let data: any = { result: [] };
    data.result.push(this.curentRecommendation);
    this._localStorageService.set(data);
  }

  setNewItemLocalStorage() {
    let localStorageData = this._localStorageService.get();
    if(localStorageData?.result) {
      localStorageData.result.push(this.curentRecommendation);
    } else if (localStorageData) {
      localStorageData.push(this.curentRecommendation);
    }

    this._localStorageService.set(localStorageData);
  }

  closeModalAndSave() {
    this.saveMusicSuggestionsList();
    this.tracksResultModal.close();
  }

  saveMusicSuggestionsList() {
    if (!this._localStorageService.localStorageExist()) {
      console.log('entrei aqui')
      this.createLocalStorage();
      return;
    }

    this.setNewItemLocalStorage();
  }

  checkDisableBtn(): boolean {
    const fieldsWithValue: boolean =
      (this.f['lat'].value && this.f['lon'].value) || this.f['city'].value;
    return this.form.invalid || !fieldsWithValue;
  }

  handleSubmit() {
    if (this.f['lat'].value && this.f['lon'].value) {
      this.getCurrentWeatherData(
        {
          lat: this.f['lat'].value,
          lon: this.f['lon'].value,
        },
        false
      );
    } else if (this.f['city'].value) {
      this.getCoordinatesByLocationName(this.f['city'].value);
    }
  }
}
