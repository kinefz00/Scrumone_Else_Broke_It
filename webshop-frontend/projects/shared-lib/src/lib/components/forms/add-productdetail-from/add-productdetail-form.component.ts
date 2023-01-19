import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductDetailHttpService, ProductHttpService} from "../../../http-services";
import {Product} from "../../../models";

@Component({
  selector: 'lib-add-productdetail-form',
  templateUrl: './add-productdetail-form.component.html',
  styleUrls: ['./add-productdetail-form.component.css'],
})
export class AddProductDetailFormComponent implements OnInit {
  @Output() productDetailAdded: EventEmitter<any> = new EventEmitter<any>();
  @Input() product!: Product;

  public addProductDetailForm: FormGroup = this.formBuilder.group({
    productId: [null],
    detailTitle: [null],
    detailText: [null],
  });

  constructor(
    private formBuilder: FormBuilder,
    private productDetailHttpService: ProductDetailHttpService,
    private productHttpService: ProductHttpService,
  ) {
  }

  ngOnInit(): void {
  }

  public submit() {
    console.log('>>>> ', this.addProductDetailForm.value, );
    this.productDetailHttpService.postProductDetail(this.addProductDetailForm.value);
    // this.productDetailHttpService.assignProductDetail();
    this.productDetailAdded.emit();
  }
}
