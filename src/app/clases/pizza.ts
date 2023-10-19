export class Pizza {
  nombre: string;
  ingredientes: string;
  precio: number;
  peso: number;
  id:string;

  constructor(
    nombre: string,
    ingredientes: string,
    precio: number,
    peso: number,
    id=''
  ) {
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.precio = precio;
    this.peso = peso;
    this.id=id;
  }
}
