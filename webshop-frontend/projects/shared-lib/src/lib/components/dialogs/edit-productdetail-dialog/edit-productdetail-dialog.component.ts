import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Product, TechnicalDetail} from "../../../models";


@Component({
  selector: 'lib-add-product',
  templateUrl: './edit-productdetail-dialog.component.html',
  styleUrls: ['./edit-productdetail-dialog.component.css'],
})
export class EditProductDetailDialogComponent implements OnInit {
  public product!: Product;

  constructor(private dialogRef: MatDialogRef<EditProductDetailDialogComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: any) {
  }

  ngOnInit(): void {
    console.log("productDetails:", this.data.product.details[0].id);
    console.log("data:", this.data);
    this.product = this.data.product.details[0].id;
  }

  public close() {
    this.dialogRef.close();
  }


}
