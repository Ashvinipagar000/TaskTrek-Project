import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CreateTaskComponent } from './component/create-task/create-task.component';
import { AllTaskComponent } from './component/all-task/all-task.component';
import { UpdateTaskComponent } from './component/update-task/update-task.component';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';
import { CalenderComponent } from './component/calender/calender.component';

const routes: Routes = [
  {
    path:'', redirectTo:'home',pathMatch:'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'AllTask', component: AllTaskComponent
  },
  {
    path: 'createTask', component: CreateTaskComponent
  },
  {
    path: 'updateTask/:id', component: UpdateTaskComponent
  },
  {
    path: 'updateTask', component: UpdateTaskComponent
  },
  {
    path: 'confirm-dialog', component: ConfirmDialogComponent
  },
  {
    path: 'calender', component: CalenderComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
