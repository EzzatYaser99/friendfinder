import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from "primeng/menubar";
import {MenuItem} from "primeng/api";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonModule} from "primeng/button";
import {ChipsModule} from "primeng/chips";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenubarModule, ButtonModule, ChipsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  items: MenuItem[] = [
    {label: 'HOME', routerLink: 'mainpage', icon: 'fa-solid fa-house'},
    {
      label: 'TimeLine',
      items: [
        {label: 'TimeLine', routerLink: 'timeline'},
        {label: 'TimeLine About', routerLink: 'timeline-about'},
        {label: 'TimeLine Album', routerLink: 'timeline-friends'},
        {label: 'TimeLine Friends', routerLink: 'timeline-album'},
      ]
    },
    {
      label: 'All Pages', items: [
        {label: 'TimeLine', routerLink: 'timeline'},
        {label: 'TimeLine About', routerLink: 'timeline-about'},
        {label: 'TimeLine Album', routerLink: 'timeline-friends'},
        {label: 'TimeLine Friends', routerLink: 'timeline-album'},
        {label: 'Contact', routerLink: 'contact'},
      ]
    },
    {label: 'Contact', routerLink: 'contact', icon: ''},

  ];

}
