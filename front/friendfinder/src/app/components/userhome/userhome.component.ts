import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PuplishComponent} from "./puplish/puplish.component";
import {LeftBarComponent} from "./left-bar/left-bar.component";
import {RightBarComponent} from "./right-bar/right-bar.component";

@Component({
  selector: 'app-userhome',
  standalone: true,
  imports: [CommonModule, PuplishComponent, LeftBarComponent, RightBarComponent],
  templateUrl: './userhome.component.html',
  styleUrl: './userhome.component.css'
})
export class UserhomeComponent {

}
