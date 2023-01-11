import { ComponentFixture, TestBed } from '@angular/core/testing';
import {EditDeliveryAddressDialogComponent} from "./edit-deliveryaddress-dialog.component";

describe('EditDeliveryAddressDialogComponent', () => {
  let component: EditDeliveryAddressDialogComponent;
  let fixture: ComponentFixture<EditDeliveryAddressDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeliveryAddressDialogComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EditDeliveryAddressDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
