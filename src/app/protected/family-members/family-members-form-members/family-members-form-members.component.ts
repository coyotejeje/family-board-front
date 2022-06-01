import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-family-members-form-members',
  templateUrl: './family-members-form-members.component.html',
  styles: []
})
export class FamilyMembersFormMembersComponent implements OnInit {

  @Input() members: FormArray;
  @Input() familyMemberForm: FormGroup;

  memberControlList: FormGroup[];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.memberControlList = this.members.controls as FormGroup[];
  }

  onAddedMember() {
    const MemberGroup: FormGroup = this.fb.group({
      'firstName': ''
    });
    this.members.push(MemberGroup);
  }

  onRemovedMember(index: number) {
    this.members.removeAt(index);
  }

}
