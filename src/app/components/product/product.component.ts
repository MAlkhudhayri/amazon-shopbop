import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ShopbopApiService } from '../../services/shopbop-api.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, MatCardModule, NgbCarouselModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ShopbopApiService] // Provide the service here
})
export class ProductComponent implements OnInit {
  @Input() product: any; // This allows you to pass a product object from the parent component
  products: any[] = [];
  errorMessage: string | null = null;

  constructor(private shopbopService: ShopbopApiService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.shopbopService
      .searchProducts('en-US', 'USD', 'jeans', 5)
      .subscribe(
        (response) => {
          this.products = response.products;
        },
        (error) => {
          this.errorMessage = 'Error fetching products. Please try again.';
          console.error(error);
        }
      );
  }

  getImageUrl(imagePath: string): string {
    return `https://api.shopbop.com${imagePath}`;
  }
}
