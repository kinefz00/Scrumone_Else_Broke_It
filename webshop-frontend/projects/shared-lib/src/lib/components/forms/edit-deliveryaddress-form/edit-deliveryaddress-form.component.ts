import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DeliveryAddress, Users} from "../../../models";
import {DeliveryaddressHttpService} from "../../../http-services/deliveryaddress-http";

@Component({
  selector: 'lib-edit-deliveryaddress-form',
  templateUrl: './edit-deliveryaddress-form.component.html',
  styleUrls: ['./edit-deliveryaddress-form.component.css'],
})
export class EditDeliveryAddressFormComponent implements OnInit {
  @Output() deliveryAddressEdited: EventEmitter<any> = new EventEmitter<any>();
  //input nimmt userobjekt entgegen (current user)
  @Input() user!: Users;
  @Input() deliveryAddress!: DeliveryAddress;


  public editDeliveryAddressForm!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private deliveryAddressHttpService: DeliveryaddressHttpService,
  ) {
  }

  ngOnInit(): void {
    this.editDeliveryAddressForm = this.formBuilder.group({
      // id: [this.product.id],
      city: [this.deliveryAddress.city],
      houseNumber: [],
      street: [],
      zipCode: [],
    });
  }

  public submit() {
    console.log('>>>> ', this.editDeliveryAddressForm.value, typeof this.user.deliveryAddress[0].id);
    this.deliveryAddressHttpService.editDeliveryAddress(this.editDeliveryAddressForm.value, this.user.deliveryAddress[0].id);
    this.deliveryAddressEdited.emit();

  }

}
