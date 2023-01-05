import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductHttpService} from "../../../http-services";
import {Product} from "../../../models";

@Component({
  selector: 'lib-edit-productdetail-form',
  templateUrl: './edit-productdetail-form.component.html',
  styleUrls: ['./edit-productdetail-form.component.css'],
})
export class EditProductDetailFormComponent implements OnInit {
  @Output() productDetailEdited: EventEmitter<any> = new EventEmitter<any>();
  //input nimmt userobjekt entgegen (current user)
  @Input() product!: Product;


  public editProductDetailForm!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private productHttpService: ProductHttpService,
  ) {
  }

  ngOnInit(): void {
    this.editProductDetailForm = this.formBuilder.group({
      // id: [this.product.id],
      detailTitle: [this.product.details], //user.username über input
      detailText: [this.product.details],
    });
  }

  public submit() {
    console.log('>>>> ', this.editProductDetailForm.value, typeof this.product.id);
    this.productHttpService.editProduct(this.editProductDetailForm.value, 1);
    this.productDetailEdited.emit();

  }

}
