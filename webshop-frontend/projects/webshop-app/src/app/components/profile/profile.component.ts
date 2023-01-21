import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {Users} from 'projects/shared-lib/src/lib/models';
import {
  UsersHttpService,
} from 'projects/shared-lib/src/public-api';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../login";
import {
  AddDeliveryAddressDialogComponent
} from "../../../../../shared-lib/src/lib/components/dialogs/add-deliveryaddress-dialog/add-delivery-address-dialog.component";
import {
  EditDeliveryAddressDialogComponent
} from "../../../../../shared-lib/src/lib/components/dialogs/edit-deliveryaddress-dialog/edit-deliveryaddress-dialog.component";
import {DeliveryaddressHttpService} from "../../../../../shared-lib/src/lib/http-services/deliveryaddress-http";
import {
  EditProfileDialogComponent
} from "../../../../../shared-lib/src/lib/components/dialogs/edit-profile-dialog/edit-profile-dialog.component";

@Component({
  selector: 'app-profile.ts',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public userList: Users[]=[];
  public singleUser: any;
  public resultsLength = 0;
  public displayedColumns: string[] = [
    'username',
    'firstName',
    'lastName',
    'email',
    'deliveryAddress',
    'options',
  ];



  constructor(
    public dialog: MatDialog,
    public userHttpService: UsersHttpService,
    public deliveryAddressHttpService: DeliveryaddressHttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public authService: AuthenticationService,

  ) {}

  /*ngOnInit() {
    const username=this.authService.getUsername();
    console.log(username)
  }*/
  ngOnInit(): void {
    let username = this.authService.isUsername();
    console.log(typeof username)
    console.log(username)
    this.userHttpService.getUser('profile').subscribe((res: Users[]) =>{
      this.userList = res
      this.userList = this.userList.filter((data: any) => data.username==username);
      if(this.userList.length<=0){
        this.router.navigateByUrl('/profile');
      }
      this.singleUser = this.userList[0];
      console.log(this.userList)
    }, (error:any)=>{
      console.log(error)
    })
  }


  public openEditUserDialog(user: any) {
    console.log("editdialog", user)
    let dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = {user}
    const dialogRef = this.dialog.open(EditProfileDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {});
  }

  public openAddDeliveryAddressDialog(user: any) {
    console.log("editdialog", user)
    let dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = {user}
    const dialogRef = this.dialog.open(AddDeliveryAddressDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {});
  }

  public openEditDeliveryAddressDialog(user: any) {
    console.log("editdialog", user)
    let dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = {user}
    const dialogRef = this.dialog.open(EditDeliveryAddressDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {});
  }


}
