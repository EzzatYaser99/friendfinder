import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TimeLinesProfileComponent} from "../time-line-profile/time-lines-profile.component";
import {TimeLineDetalisComponent} from "../time-line-detalis/time-line-detalis.component";
import {PuplishComponent} from "../../userhome/puplish/puplish.component";

@Component({
  selector: 'app-time-line',
  standalone: true,
  imports: [CommonModule, TimeLinesProfileComponent, TimeLineDetalisComponent, PuplishComponent],
  templateUrl: './time-line.component.html',
  styleUrl: './time-line.component.css'
})
export class TimeLineComponent {

}
