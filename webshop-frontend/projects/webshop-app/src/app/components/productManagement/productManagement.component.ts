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
  ProductHttpService,
} from 'projects/shared-lib/src/public-api';

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

}
