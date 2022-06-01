import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styles: []
})
export class SidenavComponent implements OnInit {

  prefix: string = 'app';
  dashboardPath: string = `${this.prefix}/dashboard`;
  familyMembersPath: string = `${this.prefix}/family-members`
  taskPath: string = `${this.prefix}/tasks`;
  profilPath: string = `${this.prefix}/profil`;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  public navigate(page: string): void {
    this.router.navigate([page]);
  }
  public isActive(page: string): boolean {
    return this.router.isActive(page, true);
  }
}