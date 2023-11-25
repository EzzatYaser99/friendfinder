import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RightBarComponent} from "../right-bar/right-bar.component";
import {LeftBarComponent} from "../left-bar/left-bar.component";
import {PuplishComponent} from "../puplish/puplish.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
    imports: [CommonModule, RightBarComponent, LeftBarComponent, PuplishComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
