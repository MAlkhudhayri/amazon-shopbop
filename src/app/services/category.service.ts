// src/app/services/category.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'https://api.shopbop.com/public';

  constructor(private http: HttpClient) {}

  getCategories(lang: string, currency: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/categories`, {
      params: {
        lang,
        currency
      }
    });
  }
}
