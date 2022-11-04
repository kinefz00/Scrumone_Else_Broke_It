import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Impressum} from "../../models";

export interface ImpressumResponse {
  content: Impressum[];
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
export class ImpressumHttpService {
  private url = 'http://localhost:8080';
  private path = 'impressum';

  constructor(private http: HttpClient) {}

  public getImpressum(queryParams?: any): Observable<Impressum[]> {
    return this.http.get<Impressum[]>(`${this.url}/${this.path}`);
  }
}
