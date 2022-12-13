import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'lib-add-product',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.css'],
})
export class AddProductDialogComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<AddProductDialogComponent>,
  ) {
  }

  ngOnInit(): void {
  }

  public close() {
    this.dialogRef.close();
  }
}
