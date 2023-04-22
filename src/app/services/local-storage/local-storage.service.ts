import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private _storage: Storage;
  private _keyName: string = 'SearchMusic';

  constructor() {
    this._storage = window.localStorage;
  }

  getKeyName(): string {
    return this._keyName;
  }

  localStorageExist(): boolean {
    return this._storage[this.getKeyName()];
  }

  set(value: any): boolean {
    if (this._storage) {
      this._storage.setItem(this._keyName, JSON.stringify(value));
      return true;
    }
    return false;
  }

  get(): any {
    if (this.localStorageExist()) {
      return JSON.parse(this._storage.getItem(this._keyName) || '');
    }
    return null;
  }

  clear(): void {
    if (this.localStorageExist()) {
      this._storage.removeItem(this._keyName);
    }
  }
}
