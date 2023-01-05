import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductHttpService} from "../../../http-services";

@Component({
  selector: 'lib-add-productdetail-form',
  templateUrl: './add-productdetail-form.component.html',
  styleUrls: ['./add-productdetail-form.component.css'],
})
export class AddProductDetailFormComponent implements OnInit {
  @Output() productDetailAdded: EventEmitter<any> = new EventEmitter<any>();

  public addProductDetailForm: FormGroup = this.formBuilder.group({
    detailTitle: [null], //user.username über input
    detailText: [null],
  });

  constructor(
    private formBuilder: FormBuilder,
    private productHttpService: ProductHttpService
  ) {
  }

  ngOnInit(): void {
  }

  public submit() {
    console.log('>>>> ', this.addProductDetailForm.value);
    this.productHttpService.postProductDetail(this.addProductDetailForm.value);
    this.productDetailAdded.emit();
  }
}
