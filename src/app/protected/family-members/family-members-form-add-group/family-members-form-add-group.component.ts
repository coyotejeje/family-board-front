import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-family-members-form-add-group',
  templateUrl: './family-members-form-add-group.component.html',
  styles: [
  ]
})
export class FamilyMembersFormAddGroupComponent implements OnInit {

  familyMembersForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.familyMembersForm = this.fb.group({
      'title': ['', [
        Validators.required
      ]]
    })
  }

  get title() { return this.familyMembersForm.get('title') }

  submit() {
    console.info(this.title?.value);
    this.router.navigate(['/app/family-members']);
  }
}
