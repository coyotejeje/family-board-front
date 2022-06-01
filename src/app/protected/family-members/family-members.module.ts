import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FamilyMembersRoutingModule } from './family-members-routing.module';
import { FamilyMembersComponent } from './family-members/family-members.component';
import { FamilyMembersFormComponent } from './family-members-form/family-members-form.component';
import { FamilyMembersFormAddGroupComponent } from "./family-members-form-add-group/family-members-form-add-group.component";
import { FamilyMembersFormMembersComponent } from './family-members-form-members/family-members-form-members.component';
import { FamilyMembersFormMembersItemComponent } from './family-members-form-members-item/family-members-form-members-item.component';
import { FamilyMembersFormMembersAddComponent } from './family-members-form-members-add/family-members-form-members-add.component';



@NgModule({
  declarations: [
    FamilyMembersComponent,
    FamilyMembersFormComponent,
    FamilyMembersFormAddGroupComponent,
    FamilyMembersFormMembersComponent,
    FamilyMembersFormMembersItemComponent,
    FamilyMembersFormMembersAddComponent
  ],
  imports: [
    SharedModule,
    FamilyMembersRoutingModule
  ]
})
export class FamilyMembersModule { }
