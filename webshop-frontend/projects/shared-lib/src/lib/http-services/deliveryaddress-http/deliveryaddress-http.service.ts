import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {DeliveryAddress} from "../../models";


export interface DeliveryAddressResponse {
  content: DeliveryAddress [];
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
export class DeliveryaddressHttpService {
  private url = 'http://localhost:8080';
  private path = 'deliveryAddress';
  private path2 = 'user';

  constructor(private http: HttpClient) {
  }



  public editDeliveryAddress(deliveryAddress?: DeliveryAddress[], id?: any) {
    console.log("edit", typeof id)
    this.http.put<DeliveryAddress>(`${this.url}/${this.path}/${id}`, deliveryAddress)
      .subscribe((res) => {
        console.log(res);
      });
    //window.location.reload();
  }
  public deleteDeliveryAddress(id?: number) {
    console.log("deleteProductLog", id)
    this.http.delete(`${this.url}/${this.path}/${id}`)
      .subscribe();
    // window.location.reload();
  }

  public postDeliveryAddress(deliveryAddress: DeliveryAddress[]) {
    console.log("Postlog", deliveryAddress)
    this.http.post<DeliveryAddress>(`${this.url}/${this.path}`, deliveryAddress)
      .subscribe((res) => {
        console.log(res);
      });
    //window.location.reload();
  }

  public assignDeliveryAddress(id?: number, username?: string){
    console.log("detailId", typeof id, "productID", username)
    this.http.put(`${this.url}/${id}/${this.path2}/${username}`, username)
      .subscribe((res)=> {
        console.log(res);
      });
  }
}
