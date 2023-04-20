import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { ModalComponent } from './modal/modal.component';
import { ListComponent } from './list/list.component';
import { ContentContainerComponent } from './content-container/content-container.component';



@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    ModalComponent,
    ListComponent,
    ContentContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    ModalComponent,
    ListComponent,
    ContentContainerComponent
  ]
})
export class SharedModule { }
