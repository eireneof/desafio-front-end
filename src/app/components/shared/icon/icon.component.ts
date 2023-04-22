import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() icon: string = 'trash';
  @Input() darkerHoover: boolean = false;
  @Input() size: number = 0;

  // TODO: ver se preciso deixar os tamanhos personalizáveis depois

  iconsList: any = {
    trash: {
      url: '../../../../assets/icons/trash-bin-svgrepo-com.svg',
    },
    x: {
      url: '../../../../assets/icons/x-symbol-svgrepo-com.svg',
    },
    play: {
      url: '../../../../assets/icons/play-svgrepo-com.svg',
    },
    pause: {
      url: '../../../../assets/icons/pause-1006-svgrepo-com.svg',
    },
    warning: {
      url: '../../../../assets/icons/warning-circle-svgrepo-com.svg',
    },
  };
}
