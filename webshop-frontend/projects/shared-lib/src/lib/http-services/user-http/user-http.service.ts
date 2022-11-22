import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(private http: HttpClient) {}

  public getUser(queryParams?: any): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.url}/${this.path}`);
  }
}
