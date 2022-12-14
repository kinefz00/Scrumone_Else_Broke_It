import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {UserLogicService} from '../../../logic-services/user-logic.service';
import {UsersHttpService} from "../../../http-services";

@Component({
  selector: 'lib-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css'],
})
export class AddUserFormComponent implements OnInit {
  @Output() userAdded: EventEmitter<any> = new EventEmitter<any>();

  public addUserForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    discount: [''],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]],
    role: [null, [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private userLogicService: UserLogicService,
    private usersHttpService: UsersHttpService
  ) {
  }

  ngOnInit(): void {
  }

  public handleSubmit() {
    if (this.addUserForm.value.role === "PUSER") {
      this.addUserForm.value.discount = 10;
    } else {
      this.addUserForm.value.discount = 0;

    }
  }
  public submit() {
    this.handleSubmit();
    console.log('>>>> ', this.addUserForm.value);
    this.usersHttpService.postUser(this.addUserForm.value);
    this.userAdded.emit();
  }
}
