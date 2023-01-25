import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'lib-add-deliveryaddress',
  templateUrl: './add-delivery-address-dialog.component.html',
  styleUrls: ['./add-delivery-address-dialog.component.css'],
})
export class AddDeliveryAddressDialogComponent implements OnInit {
  public userUsername!: string;

  constructor(private dialogRef: MatDialogRef<AddDeliveryAddressDialogComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: any,
  ) {
  }

  ngOnInit(): void {
    this.userUsername = this.data.user.username
    console.log(this.userUsername)
    console.log(this.data.user.username)
  }

  public close() {
    this.dialogRef.close();
  }
}
