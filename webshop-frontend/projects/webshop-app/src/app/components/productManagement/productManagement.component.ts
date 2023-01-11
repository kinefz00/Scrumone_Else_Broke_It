import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {
  AddProductDialogComponent
} from 'projects/shared-lib/src/lib/components/dialogs/add-product-dialog/add-product-dialog.component';
import {
  EditProductDialogComponent
} from "../../../../../shared-lib/src/lib/components/dialogs/edit-product-dialog/edit-product-dialog.component";
import {Product} from 'projects/shared-lib/src/lib/models';
import {
  ProductDetailHttpService,
  ProductHttpService,
} from 'projects/shared-lib/src/public-api';
import {
  EditProductDetailDialogComponent
} from "../../../../../shared-lib/src/lib/components/dialogs/edit-productdetail-dialog/edit-productdetail-dialog.component";
import {
  AddProductDetailDialogComponent
} from "../../../../../shared-lib/src/lib/components/dialogs/add-productdetail-dialog/add-productdetail-dialog.component";

@Component({
  selector: 'app-productManagement.ts',
  templateUrl: './productManagement.component.html',
  styleUrls: ['./productManagement.component.scss'],
})
export class ProductManagementComponent implements OnInit {
  public productManagementList: Product[] = [];
  public resultsLength = 0;
  public displayedColumns: string[] = [
    'name',
    'price',
    'currency',
    'description',
    'category',
    'technicalDetails',
    'options',
  ];


  constructor(
    public dialog: MatDialog,
    public productHttpService: ProductHttpService,
    public productDetailHttpService: ProductDetailHttpService,
  ) {
  }

  ngOnInit(): void {
    this.productHttpService
      .getProducts()
      .subscribe((response: Product[]) => { // Subscription auf ein "Observable" vom Type "UserResponse"
        console.log('>>> Users ', response);
        this.productManagementList = response;
      });
  }

  public openAddProductDialog() {
    let dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(AddProductDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
    });
  }
  public openAddProductDetailDialog(product: any){
    console.log("editdialog", product)
    let dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = {product}
    const dialogRef = this.dialog.open(AddProductDetailDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
    });
  }
  public openEditProductDialog(product: any) {
    console.log("editdialog", product)
    let dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = {product}
    const dialogRef = this.dialog.open(EditProductDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
    });
  }

  public openEditProductDetailDialog(product: any) {
    console.log("editdialog", product)
    let dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = {product}
    const dialogRef = this.dialog.open(EditProductDetailDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
    });
  }

}
