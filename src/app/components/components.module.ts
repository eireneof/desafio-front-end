import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyCollectionComponent } from './my-collection/my-collection.component';
import { SharedModule } from './shared/shared.module';
import { GeocodingApiService } from '../services/geocoding-api/geocoding-api.service';
import { HttpClientModule } from '@angular/common/http';
import { DeezerApiService } from '../services/deezer-api/deezer-api.service';
import { CurrentWeatherDataApiService } from '../services/current-weather-data-api/current-weather-data-api.service';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    MyCollectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
    GeocodingApiService,
    DeezerApiService,
    CurrentWeatherDataApiService
  ]
})
export class ComponentsModule { }
