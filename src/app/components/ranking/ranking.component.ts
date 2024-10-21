import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ProductComponent } from '../product/product.component';
import { CategoryListComponent } from '../category-list/category-list.component';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [CommonModule, MatCardModule, CategoryListComponent, ProductComponent],
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
})
export class RankingComponent {
  products: Product[] = [];
  errorMessage: string | null = null;

  displayedProducts: Product[] = [
    { id: 1, name: 'Product A', image: 'https://via.placeholder.com/150', price: 100 },
    { id: 2, name: 'Product B', image: 'https://via.placeholder.com/150', price: 150 }
  ];

  constructor() {
    this.fetchProducts(); // Fetch products on component initialization
  }

  selectProduct(product: Product) {
    console.log('Selected product:', product);
    // Logic to handle product selection
  }

  fetchProducts() {
    // Simulating a fetch action
    // In a real application, you would connect to a service to fetch the products
    this.products = this.displayedProducts;

    // Handling if no products are available
    if (this.products.length === 0) {
      this.errorMessage = 'No products available.';
    } else {
      this.errorMessage = null;
    }
  }
}
