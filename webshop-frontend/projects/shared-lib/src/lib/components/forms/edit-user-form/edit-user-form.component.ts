import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLogicService } from '../../../logic-services/user-logic.service';
import { UsersHttpService} from "../../../http-services";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Users} from "../../../models";

@Component({
  selector: 'lib-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.css'],
})
export class EditUserFormComponent implements OnInit {
  @Output() userEdited: EventEmitter<any> = new EventEmitter<any>();
  //input nimmt userobjekt entgegen (current user)
  @Input() user!: Users;


  public editUserForm!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private userLogicService: UserLogicService,
    private usersHttpService: UsersHttpService,

  ) {}//{this.user = {username:"", firstName:"", lastName:"",email:"",password:"",role:""}}

  ngOnInit(): void {
      this.editUserForm = this.formBuilder.group({
        username: [this.user.username, Validators.required], //user.username über input
        firstName: [this.user.firstName],
        lastName: [this.user.lastName],
        email: [this.user.email, Validators.email],
        password: [this.user.password, Validators.required],
        role: [this.user.role],
      });
  }

  public submit() {
    console.log('>>>> ', this.editUserForm.value, this.user.username);
    this.usersHttpService.editUser(this.editUserForm.value, this.user.username);
    this.userEdited.emit();

  }

}
