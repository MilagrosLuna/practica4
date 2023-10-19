import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';

@Component({
  selector: 'app-listar-pizzas',
  templateUrl: './listar-pizzas.component.html',
  styleUrls: ['./listar-pizzas.component.css']
})
export class ListarPizzasComponent {

  @Input() pizzas: Pizza[] = [];


  @Output() pizzaSeleccionada = new EventEmitter<any>();
  
  pizzaSele: any = null;

  selectPizza(pizza: any) {
    this.pizzaSele = pizza;
    this.pizzaSeleccionada.emit(pizza);
  }
}
