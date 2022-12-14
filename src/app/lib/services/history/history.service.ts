import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import * as queryString from 'query-string';
import { map, Observable } from 'rxjs';
import { History, HistoryQuery } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getHistory(query: HistoryQuery): Observable<History> {
    const qs = '?' + queryString.stringify(query);
    return this.http.get<History>(environment.apiUrl + 'CheckIns/History' + qs, this.httpOptions).pipe(
      map((response: any) => {
        return response;
      }),
    );
  }
}
