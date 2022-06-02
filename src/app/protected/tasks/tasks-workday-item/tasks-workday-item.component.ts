import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tasks-workday-item',
  templateUrl: './tasks-workday-item.component.html',
  styles: [
  ]
})
export class TasksWorkdayItemComponent implements OnChanges {

  @Input() title: string;
  @Input() description: string;
  @Input() status: boolean;
  @Output() taskRemoved = new EventEmitter<string>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {}

  removeTask(title : string) {
    this.taskRemoved.emit(title)
  }

}
