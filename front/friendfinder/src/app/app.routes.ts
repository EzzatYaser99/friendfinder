import { Routes } from '@angular/router';
import {MainPageComponent} from "./components/userhome/main-page/main-page.component";
import {ContactComponent} from "./components/contact/contact.component";
import {TimeLineComponent} from "./components/all-time-lines/time-line/time-line.component";
import {TimeAboutComponent} from "./components/all-time-lines/time-about/time-about.component";
import {TimeFriendsComponent} from "./components/all-time-lines/time-friends/time-friends.component";
import {TimeAlbumComponent} from "./components/all-time-lines/time-album/time-album.component";

export const routes: Routes = [
// http://localhost:2200

  {path: 'mainpage', component: MainPageComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'timeline', component: TimeLineComponent},
  {path: 'timeline-about', component: TimeAboutComponent},
  {path: 'timeline-friends', component: TimeFriendsComponent},
  {path: 'timeline-album', component: TimeAlbumComponent},
  {path: '', component: MainPageComponent},
  {path: '**', component: MainPageComponent}


];

