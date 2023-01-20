import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Product, Users} from "../../../models";
import {ProductDetailHttpService} from "../../../http-services";


@Component({
  selector: 'lib-add-productdetail',
  templateUrl: './add-productdetail-dialog.component.html',
  styleUrls: ['./add-productdetail-dialog.component.css'],
})
export class AddProductDetailDialogComponent implements OnInit {
  public productId!: number;

  constructor(private dialogRef: MatDialogRef<AddProductDetailDialogComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: any,
            private productservice: ProductDetailHttpService) {
  }

  ngOnInit(): void {
    this.productId = this.data.product;
    console.log(this.data);
    // this.productservice.postProductDetail()

  }

  public close() {
    this.dialogRef.close();
  }
}
