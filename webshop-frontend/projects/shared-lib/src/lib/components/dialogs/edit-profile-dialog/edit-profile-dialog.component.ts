import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Users} from "../../../models";


@Component({
  selector: 'lib-add-user',
  templateUrl: './edit-profile-dialog.component.html',
  styleUrls: ['./edit-profile-dialog.component.css'],
})
export class EditProfileDialogComponent implements OnInit {
  public profile!: Users;

  constructor(private dialogRef: MatDialogRef<EditProfileDialogComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: any) {
  }

  ngOnInit(): void {
    console.log("user:", this.data.user);
    console.log("data:", this.data);
    this.profile = this.data.user;
  }

  public close() {
    this.dialogRef.close();
  }


}
