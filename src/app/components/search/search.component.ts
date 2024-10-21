// search.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShopbopApiService } from '../../services/shopbop-api.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchTerm: string = '';
  products: any[] = [];
  isLoading: boolean = false;
  errorMessage: string | null = null;

  constructor(private shopbopService: ShopbopApiService) {}

  searchProducts() {
    if (!this.searchTerm.trim()) {
      this.errorMessage = 'Please enter a search term';
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;

    this.shopbopService
      .searchProducts('en-US', 'USD', this.searchTerm, 20)
      .subscribe(
        (data) => {
          this.products = data.products.map((item: any) => item.product);
          this.isLoading = false;
        },
        (error) => {
          this.errorMessage = 'Error fetching products. Please try again.';
          this.isLoading = false;
        }
      );
  }
}
