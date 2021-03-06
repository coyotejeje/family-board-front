import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FamilyMembersComponent } from './family-members/family-members.component';
  
const routes: Routes = [
 { path: '', component: FamilyMembersComponent }
];
  
@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class FamilyMembersRoutingModule { }