import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './vistas/login/login.component';
import { HomeComponent } from './vistas/home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BibliotecaComponent } from './vistas/home/biblioteca/biblioteca.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { ClickOutsideModule } from 'ng-click-outside';
import { LogoutComponent } from './vistas/logout/logout.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PerfilComponent } from './vistas/home/perfil/perfil.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastMessagesComponent } from './componentes/toast-messages/toast-messages.component';
import { RegisterComponent } from './vistas/register/register.component';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { MatCardModule } from '@angular/material/card';
import { RefreshService } from './services/refresh.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BibliotecaComponent,
    ToolbarComponent,
    MenuComponent,
    LogoutComponent,
    PerfilComponent,
    ToastMessagesComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    ClickOutsideModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatPasswordStrengthModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
