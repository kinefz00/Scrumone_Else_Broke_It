import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TechnicalDetail} from "../../models";

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
  private path2 = 'product';


  constructor(private http: HttpClient) {
  }

  public editProductDetail(technicalDetails?: TechnicalDetail[], id?: any) {
    console.log("edit", typeof id)
    this.http.put<TechnicalDetail>(`${this.url}/${this.path}/${id}`, technicalDetails)
      .subscribe((res) => {
        console.log(res);
      });
   // window.location.reload();
  }
  public deleteProductDetail(id?: number) {
    console.log("deleteProductLog", id)
    this.http.delete(`${this.url}/${this.path}/${id}`)
      .subscribe();
    window.location.reload();
  }

  public postProductDetail(technicalDetails: TechnicalDetail[], id?: number) {
    console.log("Postlog", technicalDetails)
    this.http.post<TechnicalDetail>(`${this.url}/${this.path2}/${id}/${this.path}`, technicalDetails)
      .subscribe((res) => {
        console.log(res);
      });
    window.location.reload();
  }

  // public assignProductDetail(id?: number, productId?: any){
  //   console.log("detailId", typeof id, "productID", productId)
  //   this.http.put(`${this.url}/${15}/${this.path2}/${2}`, productId)
  //   .subscribe((res)=> {
  //   console.log(res);
  //   });
  // }
}
