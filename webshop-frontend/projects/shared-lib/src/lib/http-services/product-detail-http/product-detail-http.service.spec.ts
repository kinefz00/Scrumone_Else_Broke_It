import {TestBed} from '@angular/core/testing';

import {ProductDetailHttpService} from './product-detail-http.service';

describe('ProductDetailHttpService', () => {
  let service: ProductDetailHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDetailHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
