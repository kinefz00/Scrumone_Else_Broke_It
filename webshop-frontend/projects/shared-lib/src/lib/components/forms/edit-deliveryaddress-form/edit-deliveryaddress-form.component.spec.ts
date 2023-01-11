import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EditDeliveryAddressFormComponent} from './edit-deliveryaddress-form.component';

describe('EditDeliveryAddressFormComponent', () => {
  let component: EditDeliveryAddressFormComponent;
  let fixture: ComponentFixture<EditDeliveryAddressFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDeliveryAddressFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EditDeliveryAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
