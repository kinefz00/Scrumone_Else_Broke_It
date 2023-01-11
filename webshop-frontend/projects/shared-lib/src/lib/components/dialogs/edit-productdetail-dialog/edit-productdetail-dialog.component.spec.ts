import { ComponentFixture, TestBed } from '@angular/core/testing';
import {EditProductDetailDialogComponent} from "./edit-productdetail-dialog.component";

describe('EditProductDetailDialogComponent', () => {
  let component: EditProductDetailDialogComponent;
  let fixture: ComponentFixture<EditProductDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductDetailDialogComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EditProductDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
