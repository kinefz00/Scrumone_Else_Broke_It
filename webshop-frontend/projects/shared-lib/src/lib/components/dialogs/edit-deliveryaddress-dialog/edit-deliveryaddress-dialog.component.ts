import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Users} from "../../../models";


@Component({
  selector: 'lib-edit-deliveryaddress',
  templateUrl: './edit-deliveryaddress-dialog.component.html',
  styleUrls: ['./edit-deliveryaddress-dialog.component.css'],
})
export class EditDeliveryAddressDialogComponent implements OnInit {
  public user!: Users;

  constructor(private dialogRef: MatDialogRef<EditDeliveryAddressDialogComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: any) {
  }

  ngOnInit(): void {
    console.log("DeliveryAddress:", this.data.user.deliveryAddress[0].id);
    console.log("data:", this.data);
    this.user = this.data.user.deliveryAddress[0];
  }

  public close() {
    this.dialogRef.close();
  }


}
