import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LeftBarComponent} from "../left-bar/left-bar.component";
import {PuplishComponent} from "../puplish/puplish.component";
import {RightBarComponent} from "../right-bar/right-bar.component";

@Component({
  selector: 'app-cool-images',
  standalone: true,
    imports: [CommonModule, LeftBarComponent, PuplishComponent, RightBarComponent],
  templateUrl: './cool-images.component.html',
  styleUrl: './cool-images.component.css'
})
export class CoolImagesComponent {

}
