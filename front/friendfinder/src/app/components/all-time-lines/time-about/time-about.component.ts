import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TimeLineDetalisComponent} from "../time-line-detalis/time-line-detalis.component";
import {TimeLinesProfileComponent} from "../time-line-profile/time-lines-profile.component";

@Component({
  selector: 'app-time-about',
  standalone: true,
  imports: [CommonModule, TimeLineDetalisComponent, TimeLinesProfileComponent],
  templateUrl: './time-about.component.html',
  styleUrl: './time-about.component.css'
})
export class TimeAboutComponent {

}
