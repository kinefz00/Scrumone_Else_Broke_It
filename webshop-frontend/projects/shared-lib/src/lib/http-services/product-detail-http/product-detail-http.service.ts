import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product, TechnicalDetail} from "../../models";


export interface ProductDetailResponse {
  content: TechnicalDetail [];
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
  private path = 'technicalDetails';

  constructor(private http: HttpClient) {
  }

  public getProducts(queryParams?: any): Observable<TechnicalDetail[]> {
    return this.http.get<TechnicalDetail[]>(`${this.url}/${this.path}`);
  }

  public editProductDetail(technicalDetails?: TechnicalDetail[], id?: any) {
    console.log("edit", typeof id)
    this.http.put<TechnicalDetail>(`${this.url}/${this.path}/${id}`, technicalDetails)
      .subscribe((res) => {
        console.log(res);
      });
    //window.location.reload();
  }
  public deleteProductDetail(id?: number) {
    console.log("deleteProductLog", typeof id)
    this.http.delete(`${this.url}/${this.path}/${id}`)
      .subscribe();
    window.location.reload();
  } // ToDo: Nicht Id vom Produkt ziehen sondern die vom Detail des Produkts

  public postProductDetail(technicalDetails: TechnicalDetail[]) {
    console.log("Postlog", technicalDetails)
    this.http.post<Product>(`${this.url}/${this.path}`, technicalDetails)
      .subscribe((res) => {
        console.log(res);
      });
    window.location.reload();
  }
}
