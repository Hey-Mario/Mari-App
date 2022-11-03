import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { User } from 'src/app/main/Model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  link = 'https://jsonplaceholder.typicode.com/users?email=';

  constructor(
    private http: HttpClient
  ) { }

  logByEmail(email: string): Promise<User[]> {
    return lastValueFrom(this.http.get<User[]>(this.link + email))
  }
}
