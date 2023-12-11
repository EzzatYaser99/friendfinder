import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TimeLinesProfileComponent} from "./time-line-profile/time-lines-profile.component";
import {TimeLineDetalisComponent} from "./time-line-detalis/time-line-detalis.component";
import {TimeLineComponent} from "./time-line/time-line.component";

@Component({
  selector: 'app-time-lines',
  standalone: true,
  imports: [CommonModule, TimeLinesProfileComponent, TimeLineDetalisComponent, TimeLineComponent],
  templateUrl: './time-lines.component.html',
  styleUrl: './time-lines.component.css'
})
export class TimeLinesComponent {

}
