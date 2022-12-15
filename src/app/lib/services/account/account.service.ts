import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { map, Observable } from 'rxjs';
import { User } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getUsers(): Observable<User> {
    return this.http.get<User>(environment.apiUrl + 'Users' , this.httpOptions).pipe(
      map((response: any) => {
        return response;
      }),
    );
  }
}
