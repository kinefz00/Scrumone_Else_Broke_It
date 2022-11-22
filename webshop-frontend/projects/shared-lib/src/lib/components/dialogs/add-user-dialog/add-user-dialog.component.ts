import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UsersHttpService} from "../../../http-services";

@Component({
  selector: 'lib-add-user',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css'],
})
export class AddUserDialogComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<AddUserDialogComponent>,
  private usersHttpService: UsersHttpService) {}

  ngOnInit(): void {
    this.usersHttpService.postUser()

  }

  public close() {
    this.dialogRef.close();
  }


}
