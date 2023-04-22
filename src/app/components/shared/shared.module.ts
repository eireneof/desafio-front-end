import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { ModalComponent } from './modal/modal.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { IconComponent } from './icon/icon.component';
import { TrackItemComponent } from './track-item/track-item.component';
import { TrackListCardComponent } from './track-list-card/track-list-card.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    ModalComponent,
    ContentContainerComponent,
    LoadingComponent,
    IconComponent,
    TrackItemComponent,
    TrackListCardComponent,
  ],
  imports: [CommonModule, FormsModule, FeatherModule.pick(allIcons)],
  exports: [
    InputComponent,
    ButtonComponent,
    ModalComponent,
    ContentContainerComponent,
    LoadingComponent,
    IconComponent,
    TrackItemComponent,
    TrackListCardComponent,
    FeatherModule,
  ],
})
export class SharedModule {}
