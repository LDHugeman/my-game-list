import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { PersistanceService } from './persistance.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user: string;
  password: string;

  constructor(
    private _auth: AuthService,
    private _persistanceService: PersistanceService
  ) {
    this.user = this._persistanceService.get('profileName');
  }

  login(user: string, pass: string): Observable<any> {
    let userData = this._auth.loginUser({ loginId: user, password: pass });
    userData.subscribe((userData) => {
      this.user = userData.userName;
      this._persistanceService.set('profileName', userData.userName);
    });
    return userData;
  }

  logout() {
    this._persistanceService.set('profileName', '');
    this.user = '';
  }
}
