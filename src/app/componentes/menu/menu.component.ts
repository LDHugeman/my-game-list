import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

interface MenuOption {
  nombre: string;
  enlace: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Output() opcionChange = new EventEmitter<string>();
  showMenu: boolean;
  opcionsMenu: MenuOption[] = [
    { nombre: 'Biblioteca', enlace: '/home/biblioteca' },
    { nombre: 'Perfil', enlace: '/home/perfil' },
    { nombre: 'Cerrar Sesión', enlace: '/logout' },
  ];
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  openMenu(state: boolean) {
    this.showMenu = state;
  }

  cargarPantalla(ruta: string, titulo: string) {
    this._router.navigateByUrl(ruta).then(() => {
      this.opcionChange.emit(titulo);
      this.showMenu = false;
    });
  }
}
