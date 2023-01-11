import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddDeliveryAddressFormComponent} from './add-deliveryaddress-form.component';

describe('AddDeliveryAddressFormComponent', () => {
  let component: AddDeliveryAddressFormComponent;
  let fixture: ComponentFixture<AddDeliveryAddressFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDeliveryAddressFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddDeliveryAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
