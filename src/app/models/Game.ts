export class Game {
  nombre: string;
  plataforma: string;
  genero: string;
  estado: string;
  puntuacion: string;
  fechaDeLanzamiento: string;
  desarrollador: string;
  caratula: string;

  constructor(
    nombre: string,
    plataforma: string,
    genero: string,
    estado: string,
    puntuacion: string,
    fechaDeLanzamiento: string,
    desarrollador: string,
    caratula?: string
  ) {
    this.caratula = caratula;
    this.nombre = nombre;
    this.plataforma = plataforma;
    this.genero = genero;
    this.estado = estado;
    this.puntuacion = puntuacion;
    this.fechaDeLanzamiento = fechaDeLanzamiento;
    this.desarrollador = desarrollador;
  }
}
