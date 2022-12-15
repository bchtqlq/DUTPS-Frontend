import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { storage } from '@lib/utils/storage/storage.utils';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  isLoggedIn$ = new BehaviorSubject<boolean>(!!storage.getItem('App/session'));

  get isLoggedIn(): boolean {
    return this.isLoggedIn$.getValue();
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(environment.apiUrl + 'Auth/Login', { username, password }, this.httpOptions).pipe(
      map((response: any) => {
        const data = response.data;
        if (data) {
          storage.setItem('App/session', { user: data.username, token: data.accessToken });
          this.isLoggedIn$.next(true);
          return data;
        }
      })
    );
  }

  logout(): void {
    storage.removeItem('App/session');
    this.isLoggedIn$.next(false);
  }
}
