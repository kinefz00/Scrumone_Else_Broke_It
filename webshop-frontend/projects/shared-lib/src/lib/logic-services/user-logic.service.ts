import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Users} from './users.interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserLogicService {
  private users: Users[] = [];

  public userList$: BehaviorSubject<Users[]> = new BehaviorSubject<Users[]>(
    this.users
  );

  constructor() {
  }

  public addUser(user: Users): void {
    this.users.push(user);
    this.userList$.next(this.users);
  }

}
