import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left-bar.component.html',
  styleUrl: './left-bar.component.css'
})
export class LeftBarComponent {

  // @ts-ignore
    newsFeed: any = [
      {label: 'My Newsfeed' , icon: 'icon ion-ios-paper' ,          href: 'newsfeed.html'},
      {label: 'People Nearby',icon: 'icon ion-ios-people' ,         href: 'newsfeed-people-nearby.html',},
      {label: 'Friends' ,     icon: 'icon ion-ios-people-outline' , href: 'newsfeed-friends.html',},
      {label: 'Messages' ,    icon: 'icon ion-chatboxes' ,          href: 'newsfeed-messages.html',},
      {label: 'Images' ,      icon: 'icon ion-images' ,             href: 'newsfeed-images.html',},
      {label: 'Videos' ,      icon: 'icon ion-ios-videocam' ,       href: 'newsfeed-videos.html',}
  ]

    chatBlock :any = [
            {title: 'Linda Lohan' ,  image:"assets/images/users/user-2.jpg" ,          href: 'newsfeed-messages.html'},
            {title: 'Sophia Lee' ,   image:"assets/images/users/user-3.jpg" ,          href: 'newsfeed-messages.html'},
            {title: 'John Doe' ,     image:"assets/images/users/user-4.jpg" ,          href: 'newsfeed-messages.html'},
            {title: 'Alexis Clark' , image:"assets/images/users/user-5.jpg" ,          href: 'newsfeed-messages.html'},
            {title: 'James Carter' , image:"assets/images/users/user-6.jpg" ,          href: 'newsfeed-messages.html'},
            {title: 'Robert Cook' ,  image:"assets/images/users/user-7.jpg" ,          href: 'newsfeed-messages.html'},
            {title: 'Richard Bell' , image:"assets/images/users/user-8.jpg" ,          href: 'newsfeed-messages.html'},
            {title: 'Anna Young' ,   image:"assets/images/users/user-9.jpg" ,          href: 'newsfeed-messages.html'},
            {title: 'Julia Cox' ,    image:"assets/images/users/user-10.jpg" ,          href: 'newsfeed-messages.html'},
        ]


}
