import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecomendedTrackListModel } from 'src/app/models/recomended-track-model';

@Component({
  selector: 'app-track-list-card',
  templateUrl: './track-list-card.component.html',
  styleUrls: ['./track-list-card.component.scss']
})
export class TrackListCardComponent {
  trackListExample: RecomendedTrackListModel = {
    searchDate: "Thu Apr 20 2023 15:20:36 GMT-0300 (Brasilia Standard Time)",
    tracks: [
    {
    id: '2121159577',
    link: "https://www.deezer.com/track/2121159577",
    preview: "https://cdns-preview-2.dzcdn.net/stream/c-2b70ff58f7be35f820ceb5e0369e4f56-2.mp3",
    title: "Winter Song",
    explicit: false,
    minutes: 162,
    duration: "02:42",
    imageLink: "https://e-cdns-images.dzcdn.net/images/cover/849495d7d2d8e13d10261b97f24bde6e/56x56-000000-80-0-0.jpg",
    artists: "Rabelius"
    },
    {
    id: '2041734427',
    link: "https://www.deezer.com/track/2041734427",
    preview: "https://cdns-preview-6.dzcdn.net/stream/c-62febd4eeac186b99ad6500de571018e-2.mp3",
    title: "The blink of an eye",
    explicit: false,
    minutes: 164,
    duration: "02:44",
    imageLink: "https://e-cdns-images.dzcdn.net/images/cover/452075be1c056c479a02583cec5553a2/56x56-000000-80-0-0.jpg",
    artists: "Christian Janssen"
    },
    {
    id: '2103197027',
    link: "https://www.deezer.com/track/2103197027",
    preview: "https://cdns-preview-6.dzcdn.net/stream/c-664d3fd251ad061b4f6d25327f602acc-2.mp3",
    title: "Måneskinn",
    explicit: false,
    minutes: 140,
    duration: "02:20",
    imageLink: "https://e-cdns-images.dzcdn.net/images/cover/4c0900bcdd01f3eb153ae2474b8bd2ff/56x56-000000-80-0-0.jpg",
    artists: "Kjøpmann"
    },
    {
    id: '2098852277',
    link: "https://www.deezer.com/track/2098852277",
    preview: "https://cdns-preview-f.dzcdn.net/stream/c-fb595c670981a58b710c25a4acf04d0a-2.mp3",
    title: "De bruggen van Amsterdam",
    explicit: false,
    minutes: 140,
    duration: "02:20",
    imageLink: "https://e-cdns-images.dzcdn.net/images/cover/5d8303180369d2e7477bfd6ad46aabaf/56x56-000000-80-0-0.jpg",
    artists: "Dennis Korn"
    },
    {
    id: '1100680362',
    link: "https://www.deezer.com/track/1100680362",
    preview: "https://cdns-preview-5.dzcdn.net/stream/c-55024dd3663a24d05357edeb689bd504-3.mp3",
    title: 'Liszt: Wiegenlied, S. 198',
    explicit: false,
    minutes: 189,
    duration: '03:09',
    imageLink: 'https://e-cdns-images.dzcdn.net/images/cover/47b7b9053293a9a09201b2e7bba9a3d7/56x56-000000-80-0-0.jpg',
    artists: 'Bertrand Chamayou'
    }
],
temperature: 23.23,
city: 'Jales',
country: 'BR',
musicsGenre: 'CLASSIC'
} 

@Input() trackList: RecomendedTrackListModel = this.trackListExample;
@Input() index: number = 0;
@Output() deleteItemEmitter: EventEmitter<number> = new EventEmitter();

emitDeleteAction() {
  this.deleteItemEmitter.emit(this.index);
}

}
