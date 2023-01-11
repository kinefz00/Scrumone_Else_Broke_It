import {ComponentFixture, TestBed} from '@angular/core/testing';

import {
  AddDeliveryAddressDialogComponent,
} from './add-delivery-address-dialog.component';

describe('AddDeliveryAddressDialogComponent', () => {
  let component: AddDeliveryAddressDialogComponent;
  let fixture: ComponentFixture<AddDeliveryAddressDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDeliveryAddressDialogComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddDeliveryAddressDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
