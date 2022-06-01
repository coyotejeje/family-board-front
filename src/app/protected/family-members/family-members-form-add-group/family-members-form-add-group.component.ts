import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { FamilyService } from 'src/app/core/services/family.service';
import { Family } from 'src/app/shared/models/family';

@Component({
  selector: 'app-family-members-form-add-group',
  templateUrl: './family-members-form-add-group.component.html',
  styles: []
})
export class FamilyMembersFormAddGroupComponent implements OnInit {

  @Output() displayAddMembersGroup = new EventEmitter<void>();
  familly: Family;
  familyMembersForm: FormGroup
  @Output() idFamilyEvent = new EventEmitter<number>();
  //@Output() hiddenButtonCreateGroup = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private familyService: FamilyService
    ) { }

  ngOnInit(): void {
    this.familyMembersForm = this.fb.group({
      'title': ['', [
        Validators.required
      ]]
    })
  }

  get title() { return this.familyMembersForm.get('title') }

  submit() {
    this.familyService.createAFamily(this.familyMembersForm.value).subscribe(data => {
      console.log(data);
      this.idFamilyEvent.emit(data?.id);
    })
    //console.info(this.title?.value);
    this.router.navigate(['/app/family-members']);
  }

  test() {
    this.displayAddMembersGroup.emit();
  }
}