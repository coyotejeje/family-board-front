import { Component, OnInit } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { FamilyMembersService } from 'src/app/core/services/family-members.service';
import { FamilyService } from 'src/app/core/services/family.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  users: {firstName: string, lastName?: string, email: string, phone?: string, birthDate?: Date, password?: string, primaryImage?: string}[]
  users$: Observable<{firstName: string, lastName?: string, email: string, phone?: string, birthDate?: Date, password?: string, primaryImage?: string}[]>

  constructor(
    //private userService: UserService,
    //private familyService: FamilyService,
    //private familyMembersService: FamilyMembersService
  ) { }

  ngOnInit(): void {
    this.users = [
      { firstName: 'Jerome', email: 'jerome@yahoo.fr'},
      { firstName: 'Cédric', email: 'cedric@yahoo.fr'},
      { firstName: 'Vincent', email: 'vincent@yahoo.fr'},
      { firstName: 'Maxime', email: 'maxime@yahoo.fr'},
    ];
    this.users$ = of(this.users).pipe(delay(1000))

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

    /*
    this.familyMembersService.getAllMembers().subscribe(data => {
      console.log(data)
    }, error => {
      console.log(error)
    })
    */
  }
}