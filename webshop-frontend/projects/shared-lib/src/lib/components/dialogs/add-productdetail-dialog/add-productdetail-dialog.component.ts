import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'lib-add-productdetail',
  templateUrl: './add-productdetail-dialog.component.html',
  styleUrls: ['./add-productdetail-dialog.component.css'],
})
export class AddProductDetailDialogComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<AddProductDetailDialogComponent>,
  ) {
  }

  ngOnInit(): void {
  }

  public close() {
    this.dialogRef.close();
  }
}
