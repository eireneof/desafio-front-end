import { Component, Input } from '@angular/core';
import { TrackModel } from 'src/app/models/track-model';

@Component({
  selector: 'app-track-item',
  templateUrl: './track-item.component.html',
  styleUrls: ['./track-item.component.scss'],
})
export class TrackItemComponent {
  @Input() track: TrackModel = {
    id: '2032588917',
    link: 'https://www.deezer.com/track/2032588917',
    preview:
      'https://cdns-preview-3.dzcdn.net/stream/c-366cdba0b7e5582c0e09bd074dc47c41-3.mp3',
    title: 'Hybrid',
    explicit: false,
    minutes: 195,
    duration: '03:15',
    imageLink:
      'https://e-cdns-images.dzcdn.net/images/cover/a4035dc725b5281f2b4ba6076a0c7298/56x56-000000-80-0-0.jpg',
    artists: 'I TRAVEL LIGHT',
  };
  @Input() index: number = 0;

  isPlaying: boolean[] = Array(6).fill(0);

  audioElements: HTMLAudioElement[];

  getAudioElement(i: number) {
    this.audioElements[i] = document.getElementById(
      `preview-${i}`
    ) as HTMLAudioElement;
  }

  listenerAudioEnd(i: number) {
    this.audioElements[i].addEventListener('ended', () => {
      this.isPlaying[i] = false;
    });
  }

  togglePreview(index: number) {
    if (this.isPlaying[index]) {
      this.audioElements[index].pause();
      this.isPlaying[index] = false;
    } else {
      this.audioElements.forEach((audio, i) => {
        if (i !== index) {
          audio.pause();
          this.isPlaying[i] = false;
        }
      });

      this.audioElements[index].play();
      this.isPlaying[index] = true;
    }
  }
}
