import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddUserDialogComponent } from 'projects/shared-lib/src/lib/components/dialogs/add-user-dialog/add-user-dialog.component';
import { UserLogicService } from 'projects/shared-lib/src/lib/logic-services/user-logic.service';
import { Observable } from 'rxjs';
import { User } from '../../../../../shared-lib/src/lib/logic-services/users.interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public resultsLength = 0;
  public displayedColumns: string[] = [
    'userName',
    'firstName',
    'lastName',
    'email',
  ];

  private readonly users = Observable<User[]>;

  constructor(
    public dialog: MatDialog,
    public userLogicService: UserLogicService
  ) {}

  async ngOnInit(): Promise<void> {}

  public openAddUserDialog() {
    let dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(AddUserDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
