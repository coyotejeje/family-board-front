import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-family-members',
  templateUrl: './family-members.component.html',
  styles: []
})
export class FamilyMembersComponent implements OnInit {

  groupIsCreated: boolean = false;
  idMember: number

  ngOnInit(): void {}

  constructor() { }
  
  groupCreated() {
    this.groupIsCreated = true;
  }

  getIdFamily(idFamilyEvent: number) {
    this.idMember = idFamilyEvent;
  }

}
