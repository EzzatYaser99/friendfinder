import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LeftBarComponent} from "../left-bar/left-bar.component";
import {PuplishComponent} from "../puplish/puplish.component";
import {RightBarComponent} from "../right-bar/right-bar.component";

@Component({
  selector: 'app-friends',
  standalone: true,
    imports: [CommonModule, LeftBarComponent, PuplishComponent, RightBarComponent],
  templateUrl: './friends.component.html',
  styleUrl: './friends.component.css'
})
export class FriendsComponent {

}
