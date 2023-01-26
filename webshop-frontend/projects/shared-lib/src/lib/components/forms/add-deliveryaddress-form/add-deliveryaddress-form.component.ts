import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersHttpService} from "../../../http-services";
import {DeliveryAddressHttpService} from "../../../http-services/deliveryaddress-http";
import {Users} from "../../../models";

@Component({
  selector: 'lib-add-deliveryaddress-form',
  templateUrl: './add-deliveryaddress-form.component.html',
  styleUrls: ['./add-deliveryaddress-form.component.css'],
})
export class AddDeliveryAddressFormComponent implements OnInit {
  @Output() deliveryAddressAdded: EventEmitter<any> = new EventEmitter<any>();
  @Input() user!: string;

  public addDeliveryAddressForm: FormGroup = this.formBuilder.group({
    city: [null, Validators.required],
    houseNumber: [null, Validators.required],
    street: [null, Validators.required],
    zipCode: [null, Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private deliveryAddressHttpService: DeliveryAddressHttpService,
  ) {
  }

  ngOnInit(): void {
  }

  public submit() {
    console.log('>>>> ', this.addDeliveryAddressForm.value, );
    this.deliveryAddressHttpService.postDeliveryAddress(this.addDeliveryAddressForm.value, this.user);
    // this.deliveryAddressHttpService.assignDeliveryAddress();
    this.deliveryAddressAdded.emit();
  }
}
