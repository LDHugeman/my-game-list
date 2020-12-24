import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  URL_BASE = 'http://mygamelist.ddns.net:3000';
  constructor(private _http: HttpClient) {}

  getApiStatus(): Observable<any> {
    return this._http.get(this.URL_BASE + '/status');
  }
}
