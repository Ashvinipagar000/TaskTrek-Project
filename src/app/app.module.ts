import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { CreateTaskComponent } from './component/create-task/create-task.component';
import { AllTaskComponent } from './component/all-task/all-task.component';
import { FormsModule } from '@angular/forms';
import { UpdateTaskComponent } from './component/update-task/update-task.component';
import { TaskComponent } from './component/task/task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { CalenderComponent } from './component/calender/calender.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    CreateTaskComponent,
    AllTaskComponent,
    UpdateTaskComponent,
    TaskComponent,
    ConfirmDialogComponent,
    CalenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
