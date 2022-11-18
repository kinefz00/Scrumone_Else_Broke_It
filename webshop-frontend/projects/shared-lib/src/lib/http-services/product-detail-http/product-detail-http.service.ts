import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetail } from '../../models';

export interface ProductDetailResponse {
  content: ProductDetail[];
  pageable: string;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ProductDetailHttpService {
  private url = 'http://localhost:8080';
  private path = 'productDetail';

  constructor(private http: HttpClient) {}

  public getProducts(queryParams?: any): Observable<ProductDetail[]> {
    return this.http.get<ProductDetail[]>(`${this.url}/${this.path}`);
  }
}
