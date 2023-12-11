import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TimeLineDetalisComponent} from "../time-line-detalis/time-line-detalis.component";
import {TimeLinesProfileComponent} from "../time-line-profile/time-lines-profile.component";

@Component({
  selector: 'app-time-friends',
  standalone: true,
  imports: [CommonModule, TimeLineDetalisComponent, TimeLinesProfileComponent],
  templateUrl: './time-friends.component.html',
  styleUrl: './time-friends.component.css'
})
export class TimeFriendsComponent {

}
