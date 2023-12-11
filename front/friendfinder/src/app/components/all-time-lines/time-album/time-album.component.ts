import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TimeLinesProfileComponent} from "../time-line-profile/time-lines-profile.component";
import {TimeLineDetalisComponent} from "../time-line-detalis/time-line-detalis.component";

@Component({
  selector: 'app-time-album',
  standalone: true,
  imports: [CommonModule, TimeLinesProfileComponent, TimeLineDetalisComponent],
  templateUrl: './time-album.component.html',
  styleUrl: './time-album.component.css'
})
export class TimeAlbumComponent {

}
