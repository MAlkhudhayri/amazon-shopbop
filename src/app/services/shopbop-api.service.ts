// shopbop-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopbopApiService {
  private baseUrl = 'https://api.shopbop.com';
  private headers = new HttpHeaders({
    'accept': 'application/json',
    'Client-Id': 'Shopbop-UW-Team1-2024',
    'Client-Version': '1.0.0',
  });

  constructor(private http: HttpClient) {}

  searchProducts(
    lang: string,
    currency: string,
    searchTerm: string,
    limit: number,
    minPrice?: number,
    maxPrice?: number,
    allowOutOfStock?: boolean,
    department?: string,
    sort?: string
  ): Observable<any> {
    let params = new HttpParams()
      .set('lang', lang)
      .set('currency', currency)
      .set('q', searchTerm)
      .set('limit', limit.toString());

    if (minPrice !== undefined) {
      params = params.set('minPrice', minPrice.toString());
    }
    if (maxPrice !== undefined) {
      params = params.set('maxPrice', maxPrice.toString());
    }
    if (allowOutOfStock !== undefined) {
      params = params.set('allowOutOfStockItems', allowOutOfStock.toString());
    }
    if (department) {
      params = params.set('dept', department);
    }
    if (sort) {
      params = params.set('sort', sort);
    }

    return this.http.get(`${this.baseUrl}/public/search`, {
      headers: this.headers,
      params: params,
    });
  }
}
