import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private url = 'http://localhost:8080';
  private path = 'user';
  // BASE_PATH: 'http://localhost:8080'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
  USER_NAME_SESSION_ATTRIBUTE_ROLE = 'userRole'


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
    localStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_ROLE);


  }

  isUserLoggedIn() {
    let token = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (token === undefined || token === null) return false
    return true
  }


  getRole() {
    let role = localStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    return this.http.get<any>(`${this.url}/${this.path}/${role}`).subscribe((response) => {
      sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_ROLE, <string>response.role)
      localStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    });

  }
  isAuthorized() {
    return !!this.isUserLoggedIn();
  }
  isAdmin(){
    let role= sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_ROLE)
    if (role === "ADMIN") return true
    return false
  }

  isUsername(){
    let username= sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (username === this.getToken()) return true
    return false
  }

}
