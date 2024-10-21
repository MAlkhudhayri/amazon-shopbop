import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, PromotionsComponent, FooterComponent, HomePageComponent],
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <app-promotions></app-promotions>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
