import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ContactComponent} from "./components/contact/contact.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {UserhomeComponent} from "./components/userhome/userhome.component";
import {TimeLinesComponent} from "./components/all-time-lines/time-lines.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, ContactComponent, SignUpComponent, UserhomeComponent, TimeLinesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';
}
