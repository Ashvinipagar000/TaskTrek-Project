import { UpdateTaskComponent } from './../update-task/update-task.component';
import { Router } from '@angular/router';
import { Task } from '../task/task.component';
import { TaskService } from './../../service/task.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-all-task',
  templateUrl: './all-task.component.html',
  styleUrls: ['./all-task.component.css']
})
export class AllTaskComponent implements OnInit {
  taskId!: number;
  task:Task={
    title: '',
    description: '',
    priority: '',
    completed: '',
    duedate: '',
    id: '',
  }

  constructor(private taskService:TaskService,
private router: Router,
private dialog: MatDialog
  ){}
tasks:any;
ngOnInit() {
  this.alltasks();
}

  alltasks() {
    this.taskService.alltask().subscribe((response) => {
      this.tasks = response;
    });
  }



    deleteTask(task: Task){
      const dialogRef = this.dialog.open(ConfirmDialogComponent);

      dialogRef.afterClosed().subscribe((response) => {
        if (response) {
          this.taskService.deletetask(task).subscribe(
            () => {
              this.tasks = this.tasks.filter((t: { id: any; }) => t.id !== task.id);
              alert('Task deleted successfully');
            },
            (error: any) => {
              console.error('Error deleting task:', error);
              alert('Failed to delete task');
            }
          );
        }
      });

    }}
