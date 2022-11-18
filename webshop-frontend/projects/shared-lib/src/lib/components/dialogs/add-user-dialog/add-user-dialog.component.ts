import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'lib-add-user',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css'],
})
export class AddUserDialogComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<AddUserDialogComponent>) {}

  ngOnInit(): void {}

  public close() {
    this.dialogRef.close();
  }
}
