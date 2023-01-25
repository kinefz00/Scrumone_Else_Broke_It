import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Product, TechnicalDetail} from "../../../models";


@Component({
  selector: 'lib-add-productdetail',
  templateUrl: './edit-productdetail-dialog.component.html',
  styleUrls: ['./edit-productdetail-dialog.component.css'],
})
export class EditProductDetailDialogComponent implements OnInit {
  public productDetail!: TechnicalDetail;

  constructor(private dialogRef: MatDialogRef<EditProductDetailDialogComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: any) {
  }

  ngOnInit(): void {
    //console.log("productDetails:", this.data.productDetail);
    console.log("data:", this.data);
    this.productDetail = this.data.product;
  }

  public close() {
    this.dialogRef.close();
  }


}
