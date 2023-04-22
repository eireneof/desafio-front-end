import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @ViewChild('myModal', { static: false }) modal: ElementRef;

  @Input() title: string = 'Recommended music list';
  @Input() btnLabel: string = 'ADD TO MY COLLECTION';
  @Output() submitEmitter: EventEmitter<null> = new EventEmitter();

  open() {
    this.modal.nativeElement.style.display = 'flex';
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
  }

  clickEmit() {
    this.submitEmitter.emit();
  }
}
