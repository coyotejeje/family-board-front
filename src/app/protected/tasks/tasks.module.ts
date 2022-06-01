import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TasksComponent } from './tasks/tasks.component';
import { TasksWorkdayListComponent } from './tasks-workday-list/tasks-workday-list.component';
import { TasksWorkdayItemComponent } from './tasks-workday-item/tasks-workday-item.component';
import { TasksRoutingModule } from './tasks-routing.module';



@NgModule({
  declarations: [
    TasksComponent,
    TasksWorkdayListComponent,
    TasksWorkdayItemComponent
  ],
  imports: [
    SharedModule, 
    TasksRoutingModule
  ]
})
export class TasksModule { }
