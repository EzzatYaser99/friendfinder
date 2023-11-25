import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PuplishComponent} from "./puplish/puplish.component";
import {LeftBarComponent} from "./left-bar/left-bar.component";
import {RightBarComponent} from "./right-bar/right-bar.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {FriendsComponent} from "./friends/friends.component";
import {CoolImagesComponent} from "./cool-images/cool-images.component";

@Component({
  selector: 'app-userhome',
  standalone: true,
  imports: [CommonModule, PuplishComponent, LeftBarComponent, RightBarComponent, MainPageComponent, FriendsComponent, CoolImagesComponent],
  templateUrl: './userhome.component.html',
  styleUrl: './userhome.component.css'
})
export class UserhomeComponent {

}
