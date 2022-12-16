import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Product} from "../../../models";


@Component({
  selector: 'lib-add-user',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.css'],
})
export class EditProductDialogComponent implements OnInit {
  public product!: Product;

  constructor(private dialogRef: MatDialogRef<EditProductDialogComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: any) {
  }

  ngOnInit(): void {
    console.log("product:", this.data.product);
    console.log("data:", this.data);
    this.product = this.data.product;
  }

  public close() {
    this.dialogRef.close();
  }


}
