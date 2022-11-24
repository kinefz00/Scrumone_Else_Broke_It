import { TestBed } from '@angular/core/testing';

import {UsersHttpService} from "./user-http.service";

describe('UserHttpService', () => {
  let service: UsersHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
