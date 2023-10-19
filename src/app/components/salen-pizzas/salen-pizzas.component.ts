import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Pizza } from 'src/app/clases/pizza';
import { PizzaService } from 'src/app/servicios/pizza.service';

@Component({
  selector: 'app-salen-pizzas',
  templateUrl: './salen-pizzas.component.html',
  styleUrls: ['./salen-pizzas.component.css'],
})
export class SalenPizzasComponent {
  @Input() pizza!: Pizza;
  selectedPizza: any = null;

  pizzas: Pizza[] = [];

  constructor(private pizzaService: PizzaService) {}

  ngOnInit() {
    this.cargarPizzas();
  }

  async cargarPizzas() {
    try {
      const productosData = await this.pizzaService.traerPizasBd();
      this.pizzas = productosData;
      console.log(this.pizzas);

      Swal.fire({
        icon: 'success',
        title: 'pizzas',
        text: 'Cargando pizzas...',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        timer: 4000,
      });
    }
  }

  OnPizzaCreada(pizza: Pizza) {
    this.pizzaService
      .guardarPizzaBD(pizza)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Alta de pizza exitosa',
          text: 'Pizza agregada',
          timer: 1500,
          showConfirmButton: false,
        });
        this.cargarPizzas();
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error al agregar la pizza',
          text: error.message,
          timer: 4000,
        });
      });
  }
  OnPizzaBorrada(borrada:boolean){
    if(borrada){
      this.cargarPizzas();
    }
  }
  OnPizzaModificada(modificada:boolean){
    if(modificada){
      this.cargarPizzas();
    }
  }
  OnSelectPizza(pizza:Pizza){
    this.selectedPizza = pizza;
  }
}
