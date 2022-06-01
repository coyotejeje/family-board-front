import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  constructor(private userservice: UserService) { }

  ngOnInit(): void {

    this.userservice.getUsers().subscribe(data=>{
      console.log(data);
    }, error=>{
      console.log(error);
    })
  }

}
