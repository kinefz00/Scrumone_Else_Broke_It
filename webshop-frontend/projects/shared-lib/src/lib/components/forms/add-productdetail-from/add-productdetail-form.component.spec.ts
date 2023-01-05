import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddProductDetailFormComponent} from './add-productdetail-form.component';

describe('AddProductDetailFormComponent', () => {
  let component: AddProductDetailFormComponent;
  let fixture: ComponentFixture<AddProductDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProductDetailFormComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddProductDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
