import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { CheckinQuery } from '@lib/interfaces/checkin.query.interface';
import * as queryString from 'query-string';
import { map, Observable } from 'rxjs';
import { Checkin } from './../../interfaces/checkin.interface';

@Injectable({
  providedIn: 'root',
})
export class CheckinService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getCheckin(query: CheckinQuery): Observable<History> {
    const qs = '?' + queryString.stringify(query);
    return this.http
      .get<Checkin>(environment.apiUrl + 'CheckIns/AvailableCheckIns' + qs, this.httpOptions)
      .pipe(
        map((response: any) => {
          return response;
        }),
      );
  }
}
