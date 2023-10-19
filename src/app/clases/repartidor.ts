export class Repartidor {
  nombre: string;
  apellido: string;
  edad: number;
  pais: string;
  dni: string;
  capacidadTransporte: number;
  unidadPropia: boolean;

  constructor(
    nombre: string,
    apellido: string,
    edad: number,
    pais: string,
    dni: string,
    capacidadTransporte: number,
    unidadPropia: boolean
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.pais = pais;
    this.dni = dni;
    this.capacidadTransporte = capacidadTransporte;
    this.unidadPropia = unidadPropia;
  }
}
