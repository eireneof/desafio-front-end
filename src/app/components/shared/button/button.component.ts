import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() title: string = 'field';
  @Input() type: string = 'submit';
  @Input() isDisabled: boolean = false;
  @Output() clickEmitter: EventEmitter<null> = new EventEmitter();

  clickEmit() {
    this.clickEmitter.emit();
  }
}
