import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddUserDialogComponent } from 'projects/shared-lib/src/lib/components/dialogs/add-user-dialog/add-user-dialog.component';
import {Users} from 'projects/shared-lib/src/lib/models';
import {
  UsersHttpService,
  UserResponse,
} from 'projects/shared-lib/src/public-api';

@Component({
  selector: 'app-users.ts',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public userList: Users[]=[];
  public resultsLength = 0;
  public displayedColumns: string[] = [
    'username',
    'firstName',
    'lastName',
    'email',
    'buttons'
  ];



  constructor(
    public dialog: MatDialog,
    public userHttpService: UsersHttpService,
  ) {}

  ngOnInit(): void {
    this.userHttpService
      .getUser()
      .subscribe((response: Users[]) => { // Subscription auf ein "Observable" vom Type "UserResponse"
        console.log('>>> Users ', response);
        this.userList= response;
      });
  }

  public openAddUserDialog() {
    let dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(AddUserDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
