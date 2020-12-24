import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _loginUrl = 'http://mygamelist.ddns.net:3000/api/login';
  private _registerUrl = 'http://mygamelist.ddns.net:3000/api/register';
  constructor(private _http: HttpClient) {}

  loginUser(user) {
    return this._http.post<any>(this._loginUrl, user);
  }

  registerUser(user) {
    return this._http.post<any>(this._registerUrl, user);
  }
}
