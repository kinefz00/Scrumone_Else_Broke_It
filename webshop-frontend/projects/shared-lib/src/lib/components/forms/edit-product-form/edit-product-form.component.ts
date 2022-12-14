import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductHttpService} from "../../../http-services";
import {Product} from "../../../models";

@Component({
  selector: 'lib-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.css'],
})
export class EditProductFormComponent implements OnInit {
  @Output() productEdited: EventEmitter<any> = new EventEmitter<any>();
  //input nimmt userobjekt entgegen (current user)
  @Input() product!: Product;


  public editProductForm!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private productHttpService: ProductHttpService,
  ) {
  }

  ngOnInit(): void {
    this.editProductForm = this.formBuilder.group({
      // id: [this.product.id],
      name: [this.product.name, Validators.required], //user.username über input
      price: [this.product.price],
      currency: [this.product.currency],
      description: [this.product.description],
      category: [this.product.category],
      // role: [this.user.role],
    });
  }

  public submit() {
    console.log('>>>> ', this.editProductForm.value, typeof this.product.id);
    this.productHttpService.editProduct(this.editProductForm.value, 1);
    this.productEdited.emit();

  }

}
