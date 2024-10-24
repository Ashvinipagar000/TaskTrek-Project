import { Task } from './../task/task.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';


@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})



export class UpdateTaskComponent implements OnInit{
id!: number;
  task:Task={
    title: '',
    description: '',
    priority: '',
    completed: '',
    duedate: '',
    id: 0,
  }

  constructor(
    private router:Router,
    private taskservice:TaskService,
    private route:ActivatedRoute
  ){}

  ngOnInit():void{
    this.id = +this.route.snapshot.paramMap.get('id')!;
        this.loadtask();
  }

  loadtask():void{
    this.taskservice.getTaskById(this.id).subscribe((data:Task)=>{
      console.log('Task ID:', this.id);
      console.log('Loaded Task:', this.task);
      this.task=data;
    })
  }


  saveChanges(): void {
    this.taskservice.updateTask(this.id, this.task).subscribe({
      next: () => {
          this.router.navigate(['/AllTask']); // Redirect after saving
      },
      error: (err) => {
          console.error('Error updating task:', err);
      }
  });
  }
}

