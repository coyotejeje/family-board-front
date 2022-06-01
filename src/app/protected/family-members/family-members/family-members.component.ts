import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-family-members',
  templateUrl: './family-members.component.html',
  styles: []
})
export class FamilyMembersComponent implements OnInit {

  groupIsCreated: boolean = false;
  
  ngOnInit(): void {}

  constructor() { }
  
  groupCreated() {
    this.groupIsCreated = true;
  }

}
