import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Users} from "../../../models";


@Component({
  selector: 'lib-add-user',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.css'],
})
export class EditUserDialogComponent implements OnInit {
  public user!: Users;

  constructor(private dialogRef: MatDialogRef<EditUserDialogComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: any) {
  }

  ngOnInit(): void {
    console.log("user:", this.data.user);
    console.log("data:", this.data);
    this.user = this.data.user;
  }

  public close() {
    this.dialogRef.close();
  }


}
