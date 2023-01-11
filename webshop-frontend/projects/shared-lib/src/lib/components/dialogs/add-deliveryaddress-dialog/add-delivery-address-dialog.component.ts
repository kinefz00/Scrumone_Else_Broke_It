import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'lib-add-deliveryaddress',
  templateUrl: './add-delivery-address-dialog.component.html',
  styleUrls: ['./add-delivery-address-dialog.component.css'],
})
export class AddDeliveryAddressDialogComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<AddDeliveryAddressDialogComponent>,
  ) {
  }

  ngOnInit(): void {
  }

  public close() {
    this.dialogRef.close();
  }
}
