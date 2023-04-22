import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  selectedItem: string = '';

  constructor(private _router: Router) {}

  navigate(path: string) {
    this.selectedItem = path;
    this._router.navigate([path]);
  }
}
