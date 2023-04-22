import { Component } from '@angular/core';
import { RecomendedTrackListModel } from 'src/app/models/recomended-track-model';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.scss'],
})
export class MyCollectionComponent {
  myCollection: RecomendedTrackListModel[];

  ngOnInit(): void {
    this.getLocalStorage();
  }

  constructor(private _localStorageService: LocalStorageService) {}

  getLocalStorage() {
    if (!this._localStorageService.localStorageExist()) {
      return;
    }

    let localStorageData = this._localStorageService.get();
    if (localStorageData?.result[0]) {
      this.myCollection = localStorageData.result;
    }
  }

  hasLocalStorage() {
    let localStorageData = this._localStorageService.get();
    return (
      this._localStorageService.localStorageExist() &&
      localStorageData?.result?.length
    );
  }

  deleteCard(index: number) {
    this.myCollection.splice(index, 1);
    if (!this.myCollection.length) {
      this._localStorageService.clear();
      return;
    }
    if (this._localStorageService.localStorageExist()) {
      this._localStorageService.set({ result: this.myCollection });
    }
  }
}
