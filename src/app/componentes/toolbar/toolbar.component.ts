import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { RefreshService } from 'src/app/services/refresh.service';
import { PersistanceService } from 'src/app/services/persistance.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  profileName: string;
  title: string;
  constructor(private _loginService: LoginService) {
    this.profileName = this._loginService.user;
  }

  ngOnInit(): void {
    this.title = 'Biblioteca';
  }

  changeTitle(event: string) {
    this.title = event;
  }
}
