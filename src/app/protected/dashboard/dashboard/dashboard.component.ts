import { Component, OnInit } from '@angular/core';
import { FamilyMembersService } from 'src/app/core/services/family-members.service';
import { FamilyService } from 'src/app/core/services/family.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  constructor(
    //private userService: UserService,
    //private familyService: FamilyService,
    private familyMembersService: FamilyMembersService
  ) { }

  ngOnInit(): void {
    /*
    this.userService.getUsers().subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
    */

    /*
    this.familyService.getAllFamilies().subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error)
    })
    */

    this.familyMembersService.getAllMembers().subscribe(data => {
      console.log(data)
    }, error => {
      console.log(error)
    })

    

  }
}
