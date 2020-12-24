import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private _servicioLogin: LoginService,
    private _httpService: HttpService
  ) {
    this.comprobarConexionAPI();
  }

  estaUserLogueado() {
    return this._servicioLogin.user;
  }

  comprobarConexionAPI() {
    this._httpService.getApiStatus().subscribe((resposta) => {
      console.log(resposta);
    });
  }
}
