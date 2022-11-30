import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLogicService } from '../../../logic-services/user-logic.service';
import { UsersHttpService} from "../../../http-services";

@Component({
  selector: 'lib-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.css'],
})
export class EditUserFormComponent implements OnInit {
  @Output() userEdited: EventEmitter<any> = new EventEmitter<any>();

  public editUserForm: FormGroup = this.formBuilder.group({
    username: [null],
    firstName: [null],
    lastName: [null],
    email: [null, Validators.email],
    password: [null],
    role: [null],
  });

  constructor(
    private formBuilder: FormBuilder,
    private userLogicService: UserLogicService,
    private usersHttpService: UsersHttpService
  ) {}

  ngOnInit(): void {}

  public submit() {
    console.log('>>>> ', this.editUserForm.value);
    this.usersHttpService.updateUser(this.editUserForm.value);
    this.userEdited.emit();
    window.location.reload();
  }

}
