import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductHttpService} from "../../../http-services";

@Component({
  selector: 'lib-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css'],
})
export class AddProductFormComponent implements OnInit {
  @Output() productAdded: EventEmitter<any> = new EventEmitter<any>();

  public addProductForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    price: [null, Validators.required],
    currency: [null, Validators.required],
    category: [null, Validators.required],
    description: [null, [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private productHttpService: ProductHttpService
  ) {
  }

  ngOnInit(): void {
  }

  public submit() {
    console.log('>>>> ', this.addProductForm.value);
    this.productHttpService.postProduct(this.addProductForm.value);
    this.productAdded.emit();
  }
}
