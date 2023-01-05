import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EditProductDetailFormComponent} from './edit-product-form.component';

describe('EditProductDetailFormComponent', () => {
  let component: EditProductDetailFormComponent;
  let fixture: ComponentFixture<EditProductDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditProductDetailFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EditProductDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
