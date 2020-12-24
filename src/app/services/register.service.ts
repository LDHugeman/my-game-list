import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private _auth: AuthService) {}

  register(
    firstName: string,
    lastName: string,
    email: string,
    userName: string,
    password: string
  ): Observable<any> {
    return this._auth.registerUser({
      firstName: firstName,
      lastName: lastName,
      email: email,
      userName: userName,
      password: password,
    });
  }
}
