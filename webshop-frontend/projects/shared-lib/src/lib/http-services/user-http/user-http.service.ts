import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Users} from "../../models";
import {AuthenticationService} from "../../../../../webshop-app/src/app/components";

export interface UserResponse {
  content: Users[];
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
export class UsersHttpService {
  private url = 'http://localhost:8080';
  private path = 'user';
  private USER_NAME_SESSION_ATTRIBUTE_DISCOUNT = 'userDiscount';
  private USER_NAME_SESSION_ATTRIBUTE_NAME= 'userName';
  constructor(private http: HttpClient,
  private authService:AuthenticationService) {
  }

  public getUser(queryParams?: any): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.url}/${this.path}`);
  }

  /*public getUserByUsername(queryParams?: any, username?: string ){
    this.http.get<Users>(`${this.url}/${this.path}/${username}`)
      .subscribe((res) => {
        //console.log(res);
      });
    console.log(username);
  }*/


  public postUser(users: Users[]) {
    console.log("Postlog", users)
    this.http.post<Users>(`${this.url}/${this.path}`, users)
      .subscribe((res) => {
        console.log(res);
      });
    window.location.reload();

  }

  public deleteUser(username?: string) {
    console.log("deleteUserLog", username)
    this.http.delete(`${this.url}/${this.path}/${username}`)
      .subscribe();
    window.location.reload();
  }

  public editUser(users?: Users[], username?: string) {
    console.log("edit", username)
    this.http.put<Users>(`${this.url}/${this.path}/${username}`, users)
      .subscribe((res) => {
        console.log(res);
        window.location.reload();
      });
    return this.http.get<any>(`${this.url}/${this.path}/${username}`).subscribe((res) =>{
      sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_DISCOUNT, <any>res.discount)
      window.location.reload();
    });

  }
}
