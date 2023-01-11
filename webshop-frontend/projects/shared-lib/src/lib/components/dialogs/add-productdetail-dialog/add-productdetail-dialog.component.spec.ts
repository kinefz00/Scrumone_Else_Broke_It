import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddProductDetailDialogComponent} from './add-productdetail-dialog.component';

describe('AddProductDetailDialogComponent', () => {
  let component: AddProductDetailDialogComponent;
  let fixture: ComponentFixture<AddProductDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProductDetailDialogComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddProductDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
