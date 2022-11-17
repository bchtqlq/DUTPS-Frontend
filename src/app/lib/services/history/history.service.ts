import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as queryString from 'query-string';
import { map, Observable } from 'rxjs';
import { History, HistoryQuery } from '../../interfaces';
import { storage } from '../../utils/storage/storage.utils';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  api_key = storage.getItem('App/session')?.token;
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.api_key}` }),
  };

  baseUrl = 'https://dutps.herokuapp.com/api/';
  apiUrl = this.baseUrl + 'CheckIns/History';

  getHistory(query: HistoryQuery): Observable<History> {
    const qs = '?' + queryString.stringify(query);
    return this.http.get<History>(this.apiUrl + qs, this.httpOptions).pipe(
      map((response: any) => {
        return response;
      }),
    );
  }
}
