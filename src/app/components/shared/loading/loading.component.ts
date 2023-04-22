import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  @ViewChild('myModal', { static: false }) myModal: ElementRef;

  @Input() text = 'Searching...';

  open() {
    this.myModal.nativeElement.style.display = 'flex';
  }

  close() {
    this.myModal.nativeElement.style.display = 'none';
  }
}
