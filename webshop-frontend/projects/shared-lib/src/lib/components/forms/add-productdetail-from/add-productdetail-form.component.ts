import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductDetailHttpService, ProductHttpService} from "../../../http-services";

@Component({
  selector: 'lib-add-productdetail-form',
  templateUrl: './add-productdetail-form.component.html',
  styleUrls: ['./add-productdetail-form.component.css'],
})
export class AddProductDetailFormComponent implements OnInit {
  @Output() productDetailAdded: EventEmitter<any> = new EventEmitter<any>();

  public addProductDetailForm: FormGroup = this.formBuilder.group({
    productId: [null],
    detailTitle: [null],
    detailText: [null],
  });

  constructor(
    private formBuilder: FormBuilder,
    private productDetailHttpService: ProductDetailHttpService,

  ) {
  }

  ngOnInit(): void {
  }

  public submit() {
    console.log('>>>> ', this.addProductDetailForm.value, );
    this.productDetailHttpService.postProductDetail(this.addProductDetailForm.value);
    this.productDetailHttpService.assignProductDetail();
    this.productDetailAdded.emit();
  }
}
