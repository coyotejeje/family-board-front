import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-family-members-form',
  templateUrl: './family-members-form.component.html',
  styles: []
})
export class FamilyMembersFormComponent implements OnInit {

  familyMemberForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.familyMemberForm = this.createFamilyMemberForm();
  }

  get members() { return this.familyMemberForm.get('members') as FormArray; }

  createFamilyMemberForm(): FormGroup {
    const familyMemberForm: FormGroup = this.fb.group({
      'members': this.fb.array([]),
    });

    return familyMemberForm;
  }

  submit(): void {
    console.info(this.familyMemberForm.value);
  }
}
