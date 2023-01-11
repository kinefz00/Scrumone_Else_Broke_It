import {TestBed} from '@angular/core/testing';
import {DeliveryaddressHttpService} from "./deliveryaddress-http.service";


describe('DeliveryAddressHttpService', () => {
  let service: DeliveryaddressHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryaddressHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
