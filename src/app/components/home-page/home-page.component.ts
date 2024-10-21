import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SearchComponent } from '../search/search.component'; 
import { OrSectionComponent } from '../or-section/or-section.component';
import { TrendingProductsComponent } from '../trending-products/trending-products.component';
import { GenzCategoriesComponent } from '../genz-categories/genz-categories.component';
import { PromotionsComponent } from '../promotions/promotions.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NavbarComponent,
    SearchComponent,
    OrSectionComponent,
    TrendingProductsComponent,
    GenzCategoriesComponent,
    PromotionsComponent,
    FooterComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {}
