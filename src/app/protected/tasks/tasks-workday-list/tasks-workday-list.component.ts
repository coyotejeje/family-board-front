import { Component, OnInit } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-tasks-workday-list',
  templateUrl: './tasks-workday-list.component.html',
  styles: []
})
export class TasksWorkdayListComponent implements OnInit {

  tasks: {title: string, description: string, status: boolean, startDate?: Date, endDate?: Date, givenPoints?: number}[]
  tasks$: Observable<{title: string, description: string, status: boolean, startDate?: Date, endDate?: Date, givenPoints?: number}[]> 

  constructor() { }

  ngOnInit() {
    this.tasks = [
      { title: 'Acheter du pain', description: 'Prendre 2 baguettes', status: false },
      { title: 'Faire une lessive', description: 'Laver les vêtements foncés', status: false },
      { title: 'Faire les devoirs', description: 'Exercices de mathématiques CM2', status: false },
      { title: 'Faire le bain à Marie', description: 'Uitliser le nouveau peignoir acheté', status: false },
      { title: 'Nettoyer la voiture', description: 'Prendre rdv à CarWash', status: false }
    ];
    this.tasks$ = of(this.tasks).pipe(delay(1000));
  }

  onTaskRemoved(title: string) {
    this.tasks = this.tasks.filter(task => !title.includes(task.title));
    this.tasks$ = of(this.tasks);
   }

}