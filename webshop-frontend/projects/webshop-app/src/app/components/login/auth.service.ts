import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {Users} from "../../../../../shared-lib/src/lib/models";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // BASE_PATH: 'http://localhost:8080'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'


  constructor(private http: HttpClient) {
  }

  authenticationService(username: string, password: string) {
    return this.http.get(`http://localhost:8080/public/v1/basicauth`,
      { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
      localStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
      this.registerSuccessfulLogin(`${window.btoa(username + ":" + password)}`);
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
    localStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
  }

  isUserLoggedIn() {
    let token = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (token === undefined || token === null) return false
    return true
  }
  getRole(){
    let role = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    return this.http.get<any>('http://localhost:8080/user/').subscribe((response: any) =>{
      console.log("Userrole: "+response.role)
      sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, <string>response.role)
    })
  }
}
