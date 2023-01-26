import {TestBed} from '@angular/core/testing';
import {DeliveryAddressHttpService} from "./delivery-address-http.service";


describe('DeliveryAddressHttpService', () => {
  let service: DeliveryAddressHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryAddressHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
