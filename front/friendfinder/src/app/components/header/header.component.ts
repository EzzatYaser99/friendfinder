import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from "primeng/menubar";
import {MenuItem} from "primeng/api";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenubarModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  items: MenuItem[] = [
    {label: 'HOME', routerLink: 'home', icon: 'fa-solid fa-house'},
    {label: 'NewsFeeds', routerLink: 'about', icon: ''},
    {label: 'TimeLine', routerLink: 'about', icon: ''},
    {label: 'All Pages', routerLink: 'about', icon: ''},
    {label: 'Contact', routerLink: 'about', icon: ''},

  ];

}
