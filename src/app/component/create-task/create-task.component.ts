import { Router } from '@angular/router';
import { TaskService } from './../../service/task.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})

export class CreateTaskComponent {


  constructor(private taskService: TaskService,private router:Router) {}
  title:any='';
  description:any='';
  completed:any='';
  duedate:any='';
  id:any='';
  priority:any='';


  createtask(){
    const Tasks = {
      title: this.title,
      description: this.description,
      completed: this.completed,
      duedate: this.duedate,
      id: this.id,
      priority:this.priority
    };
    this.taskService.createtask(Tasks).subscribe((response)=>{
      console.log(response);
      alert('task Added Successfully !')
      this.router.navigate(['/AllTask'])
    });

  }


}
