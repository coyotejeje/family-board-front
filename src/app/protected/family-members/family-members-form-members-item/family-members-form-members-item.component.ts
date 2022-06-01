import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-family-members-form-members-item',
  templateUrl: './family-members-form-members-item.component.html',
  styleUrls: ['./family-members-form-members-item.component.scss']
})
export class FamilyMembersFormMembersItemComponent implements OnInit {

  @Input() member: FormGroup;
  @Input() index: number;
  @Input() isFirst: boolean;
  @Input() isLast: boolean;
  @Output() removedMember = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {}

  removeMember(index: number) {
    this.removedMember.emit(index);
  }

}
