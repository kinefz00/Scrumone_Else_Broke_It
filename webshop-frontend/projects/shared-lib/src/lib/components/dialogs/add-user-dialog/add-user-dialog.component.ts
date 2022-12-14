import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {NgForm} from "@angular/forms";


@Component({
  selector: 'lib-add-user',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css'],
})
export class AddUserDialogComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<AddUserDialogComponent>,
  ) {
  }

  ngOnInit(): void {
  }

  public close() {
    this.dialogRef.close();
  }

}
