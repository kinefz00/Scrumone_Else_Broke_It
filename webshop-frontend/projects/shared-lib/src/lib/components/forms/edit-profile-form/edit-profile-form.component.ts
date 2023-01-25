import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserLogicService} from '../../../logic-services/user-logic.service';
import {UsersHttpService} from "../../../http-services";
import {Users} from "../../../models";

@Component({
  selector: 'lib-edit-profile-form',
  templateUrl: './edit-profile-form.component.html',
  styleUrls: ['./edit-profile-form.component.css'],
})
export class EditProfileFormComponent implements OnInit {
  @Output() userEdited: EventEmitter<any> = new EventEmitter<any>();
  //input nimmt userobjekt entgegen (current user)
  @Input() user!: Users;


  public editUserForm!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private userLogicService: UserLogicService,
    private usersHttpService: UsersHttpService,
  ) {
  }//{this.user = {username:"", firstName:"", lastName:"",email:"",password:"",role:""}}

  ngOnInit(): void {
    this.editUserForm = this.formBuilder.group({
      username: [this.user.username,Validators.required], //user.username über input
      firstName: [this.user.firstName,Validators.required],
      lastName: [this.user.lastName, Validators.required],
      email: [this.user.email, Validators.email],
      password: [this.user.password, Validators.required],
      role: [this.user.role,Validators.required],
      discount:[this.user.discount, Validators.required],
    });
  }

  public submit() {
    console.log('>>>> ', this.editUserForm.value, this.user.username);
    this.usersHttpService.editUser(this.editUserForm.value, this.user.username);
    this.userEdited.emit();

  }

}
