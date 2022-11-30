import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'lib-add-user',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.css'],
})
export class EditUserDialogComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<EditUserDialogComponent>,) {}

  ngOnInit(): void {
  }

  public close() {
    this.dialogRef.close();
  }


}
