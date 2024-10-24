import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../component/task/task.component';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {}

  createtask(task: any): Observable<any> {
    const url = 'http://localhost:8080/task/createtask';
    return this.http.post(url, task);
  }

  alltask():Observable<any>{
    const url = 'http://localhost:8080/task/getAllTask';
    return this.http.get(url);
  }

  updateTask(id: any, updatedtask: Task): Observable<any> {
    const url = `http://localhost:8080/task/edittask/${id}`;
    return this.http.put(url, updatedtask);
}



getTaskById(id: number): Observable<any> {
  const url = `http://localhost:8080/task/gettaskbyId/${id}`; // Adjust the endpoint as necessary
  return this.http.get<Task>(url); // Make a GET request and return an Observable

}

deletetask(task: Task):Observable<any>{
  const url=`http://localhost:8080/task/deleteTask/${task.id}`;
  return this.http.delete(url);

}


}
