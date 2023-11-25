import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-puplish',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './puplish.component.html',
  styleUrl: './puplish.component.css'
})
export class PuplishComponent {

  publishingTools: any = [
    {icon: 'ion-compose'},
    {icon: 'ion-images'},
    {icon: 'ion-ios-videocam'},
    {icon: 'ion-map'}
  ]

}
