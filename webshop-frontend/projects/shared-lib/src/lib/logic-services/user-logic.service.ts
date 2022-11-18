import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './users.interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserLogicService {
  private users: User[] = [
    {
      userName: 'mad_max',
      firstName: 'Max',
      lastName: 'Mustermann',
      email: 'maxmu@online.de',
    },
    {
      userName: 'joe666',
      firstName: 'Joe',
      lastName: 'Jordison',
      email: 'joe-y@online.de',
    },
    {
      userName: 'freeenk',
      firstName: 'Frank',
      lastName: 'Bleck',
      email: 'frable@online.de',
    },
    {
      userName: 'erika',
      firstName: 'Erika',
      lastName: 'Müller',
      email: 'erikaller@online.de',
    },
  ];

  public userList$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(
    this.users
  );

  constructor() {}

  public addUser(user: User): void {
    this.users.push(user);
    this.userList$.next(this.users);
  }
}
