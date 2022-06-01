import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-family-members-form-members-add',
  templateUrl: './family-members-form-members-add.component.html',
  styles: []
})
export class FamilyMembersFormMembersAddComponent implements OnInit {

  @Output() addedMember = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {}

  addMember() {
    this.addedMember.emit();
  }

}
