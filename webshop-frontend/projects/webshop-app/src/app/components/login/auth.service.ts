import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, retry} from 'rxjs/operators';
import {Product} from "../../../../../shared-lib/src/lib/models";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private url = 'http://localhost:8080';
  private path = 'user';
  // BASE_PATH: 'http://localhost:8080'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
  USER_NAME_SESSION_ATTRIBUTE_ROLE = 'userRole'
  USER_NAME_SESSION_ATTRIBUTE_DISCOUNT = 'userDiscount'


  constructor(private http: HttpClient) {

  }


  authenticationService(username: string, password: string) {
    return this.http.get(`http://localhost:8080/public/v1/basicauth`,
      {headers: {authorization: this.createBasicAuthToken(username, password)}}).pipe(map((res) => {
      localStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
      this.registerSuccessfulLogin(`${window.btoa(username + ":" + password)}`);
      console.log(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    }));
  }

  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  registerSuccessfulLogin(token: string) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, token)
  }

  getToken() {
    return sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();


  }

  getDiscount(){
    let discount = localStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    return this.http.get<any>(`${this.url}/${this.path}/${discount}`).subscribe((res) =>{
      sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_DISCOUNT, <any>res.discount)
      // localStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    });

  }

  // public getDiscount() {
  //   let discount = 'Fabi';
  //   var test;
  //   return this.http.get<any>(`${this.url}/${this.path}/${discount}`)
  //     .subscribe((res:Observable<any>) => {
  //       console.log(res);
  //       test = res;
  //       return test;
  //     });
  //   // window.location.reload();

  // }

  // public getDiscount() {
  //   let discount ='Fabi'
  //   var test: any;
  //   return this.http.get(`${this.url}/${this.path}/${discount}`).pipe((
  //     test
  //   ))
  // }

  isUserLoggedIn() {
    let token = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (token === undefined || token === null) return false
    return true
  }


  getRole() {
    let role = localStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    return this.http.get<any>(`${this.url}/${this.path}/${role}`).subscribe((response) => {
      sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_ROLE, <string>response.role)
      // localStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    });

  }

  isAuthorized() {
    return !!this.isUserLoggedIn();
  }

  isAdmin() {
    let role = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_ROLE)
    if (role === "ADMIN") return true
    return false
  }

  isUsername(){
    let username= localStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    return username
  }

}
