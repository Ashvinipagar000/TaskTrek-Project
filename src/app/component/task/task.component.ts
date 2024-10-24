import { Component } from '@angular/core';


export interface Task{
  title:any;
description:any;
completed:any;
duedate:any;
priority:any;
id:any;

}
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})


export class TaskComponent {


}
