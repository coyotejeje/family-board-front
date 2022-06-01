import { Component, Input, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import { Router } from '@angular/router';
import { FamilyMembersService } from 'src/app/core/services/family-members.service';
import { FamilyMember } from 'src/app/shared/models/family-member';


@Component({
  selector: 'app-family-members-form',
  templateUrl: './family-members-form.component.html',
  styles: []
})
export class FamilyMembersFormComponent implements OnInit {

  familyMember: FamilyMember;
  familyMemberForm: FormGroup;
  @Input() idMember: number;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private familyMembersService: FamilyMembersService
    ) { }

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
    //this.familyMemberForm.value
    this.familyMembersService.addMembersToFamily(this.familyMemberForm.value).subscribe(data => {
      console.log(data)
    })
    //console.log(this.familyMemberForm.value);
    //this.router.navigate(['/app/dashboard']);
  }
}
