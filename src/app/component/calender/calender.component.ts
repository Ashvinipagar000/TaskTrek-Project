import { Task } from './../task/task.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  tasks: Task[] = [];
  currentMonth: Date = new Date();

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.loadTasks();

  }

  loadTasks():void{

    this.taskService.alltask().subscribe((task)=>{
      this.tasks=task;
    })

  }

  getDaysInMonth(month: Date): Date[] {
    const start = new Date(month.getFullYear(), month.getMonth(), 1);
    const end = new Date(month.getFullYear(), month.getMonth() + 1, 0);
    const days = [];

    for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
      days.push(new Date(d));
    }

    return days;
  }

  getTasksForDate(date: Date): Task[] {
    return this.tasks.filter(task => new Date(task.duedate).toDateString() === date.toDateString());
  }

  changeMonth(direction: number): void {
    this.currentMonth.setMonth(this.currentMonth.getMonth() + direction);
  }


}
