import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { HomeComponent } from './vistas/home/home.component';
import { BibliotecaComponent } from './vistas/home/biblioteca/biblioteca.component';
import { LogoutComponent } from './vistas/logout/logout.component';
import { PerfilComponent } from './vistas/home/perfil/perfil.component';
import { RegisterComponent } from './vistas/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'biblioteca', pathMatch: 'prefix' },
      { path: 'biblioteca', component: BibliotecaComponent },
      { path: 'perfil', component: PerfilComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
