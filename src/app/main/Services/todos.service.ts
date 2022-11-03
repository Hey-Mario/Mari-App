import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Todo } from '../Model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  
  link = 'https://jsonplaceholder.typicode.com/users/';
  constructor(
    private http: HttpClient
  ) { }

  // getMyTodoList(id: number): Observable<Todo[]>{
  //   return this.http.get<Todo[]>(this.link + id + '/todos');
  // }
  getMyTodoList(id: number): Promise<Todo[]>{
    return lastValueFrom(this.http.get<Todo[]>(this.link + id + '/todos'));
  }
}
