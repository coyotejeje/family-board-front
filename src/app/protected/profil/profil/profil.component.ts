import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { AuthService } from 'src/app/core/services/auth.service';
import {User} from "../../../shared/models/user";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styles: [
  ]
})
export class ProfilComponent implements OnInit {

  profilForm: FormGroup;
  user: User|null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService) { }

  ngOnInit() {
    //this.user = this.authService.currentUser;

    this.profilForm = this.fb.group({
      'firstName': [this.user?.firstName, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
        Validators.pattern('^[a-zA-Z0-9_-]*$')
      ]],
      'primaryImage': [this.user?.primaryImage, [
        Validators.pattern('https?://.+')
      ]]
    })
  }

  get firstName() { return this.profilForm.get('firstName') as FormControl; }
  get primaryImage() { return this.profilForm.get('primaryImage') as FormControl; }

  submit() {
    if(this.user) {
      this.user.firstName = this.firstName?.value;
      this.user.primaryImage = this.primaryImage?.value;
      //this.authService.updateUserState(this.user).subscribe();
    }
  }
}
