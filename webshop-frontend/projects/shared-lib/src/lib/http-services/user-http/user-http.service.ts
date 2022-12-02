import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Users} from "../../models";

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

  constructor(private http: HttpClient) {
  }

  public getUser(queryParams?: any): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.url}/${this.path}`);
  }

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

   public editUser(users?: Users[], username?: string ){
     console.log("edit", username)
     this.http.put<Users>(`${this.url}/${this.path}/${username}`, users)
       .subscribe((res) => {
         console.log(res);
       });
     window.location.reload();
   }
}
