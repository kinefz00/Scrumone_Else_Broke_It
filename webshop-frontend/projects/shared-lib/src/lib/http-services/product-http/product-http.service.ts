import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Product, Users} from '../../models';

export interface ProductResponse {
  content: Product[];
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
export class ProductHttpService {
  private url = 'http://localhost:8080';
  private path = 'product';

  constructor(private http: HttpClient) {}

  public getProducts(queryParams?: any): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/${this.path}`);
  }
  public postProduct(product: Product[]) {
    console.log("Postlog", product)
    this.http.post<Product>(`${this.url}/${this.path}`, product)
      .subscribe((res) => {
        console.log(res);
      });
    window.location.reload();

  }

  public deleteProduct(id?: number) {
    console.log("deleteProductLog", id)
    this.http.delete(`${this.url}/${this.path}/${id}`)
      .subscribe();
    window.location.reload();
  }

  public editProduct(product?: Product[], id?: any){
    console.log("edit", id)
    this.http.put<Product>(`${this.url}/${this.path}/${id}`, id)
      .subscribe((res) => {
        console.log(res);
      });
    // window.location.reload();
  }
}
