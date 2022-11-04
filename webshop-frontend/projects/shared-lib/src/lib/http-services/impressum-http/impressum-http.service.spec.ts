import { TestBed } from '@angular/core/testing';

import { ImpressumHttpService } from './impressum-http.service';

describe('ImpressumHttpService', () => {
  let service: ImpressumHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpressumHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
