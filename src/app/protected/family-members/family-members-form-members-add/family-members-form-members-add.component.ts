import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FamilyMember } from 'src/app/shared/models/family-member';

@Component({
  selector: 'app-family-members-form-members-add',
  templateUrl: './family-members-form-members-add.component.html',
  styles: []
})
export class FamilyMembersFormMembersAddComponent implements OnInit {

  @Output() addedMember = new EventEmitter<void>();
  familyMember: FamilyMember

  constructor() { }

  ngOnInit(): void {}

  addMember() {
    this.addedMember.emit();
  }

}
