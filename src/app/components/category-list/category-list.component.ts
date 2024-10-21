// src/app/components/category-list/category-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: any[] = [];
  isLoading = true;
  errorMessage: string | null = null;

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories('en-US', 'USD').subscribe(
      (data) => {
        this.categories = data.categories;
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = 'Error fetching categories. Please try again.';
        this.isLoading = false;
      }
    );
  }
}
