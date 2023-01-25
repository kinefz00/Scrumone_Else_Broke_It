import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductDetailHttpService} from "../../../http-services";
import {Product, TechnicalDetail} from "../../../models";

@Component({
  selector: 'lib-edit-productdetail-form',
  templateUrl: './edit-productdetail-form.component.html',
  styleUrls: ['./edit-productdetail-form.component.css'],
})
export class EditProductDetailFormComponent implements OnInit {
  @Output() productDetailEdited: EventEmitter<any> = new EventEmitter<any>();
  //input nimmt userobjekt entgegen (current user)
  @Input() product!: Product;
  @Input() productDetail!: TechnicalDetail;


  public editProductDetailForm!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private productDetailHttpService: ProductDetailHttpService,
  ) {
  }

  ngOnInit(): void {
    this.editProductDetailForm = this.formBuilder.group({
      // id: [this.product.id],
      detailTitle: [this.productDetail.detailTitle], //user.username über input
      detailText: [this.productDetail.detailText],
    });
  }

  public submit() {
    console.log('>>>> ', this.editProductDetailForm.value, typeof this.productDetail.id);
    console.log(this.productDetail.id);
    this.productDetailHttpService.editProductDetail(this.editProductDetailForm.value, this.productDetail.id);
    this.productDetailEdited.emit();

  }

}
