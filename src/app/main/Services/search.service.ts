import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  link = 'https://jsonplaceholder.typicode.com/users?q=';
  constructor(
    private http: HttpClient
  ) { }

  getUsersByQuery(query: any): Observable<User[]>{
    return this.http.get<User[]>(this.link + query);
  }
}
