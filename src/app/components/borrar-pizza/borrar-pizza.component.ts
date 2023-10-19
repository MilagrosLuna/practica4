import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';
import { PizzaService } from 'src/app/servicios/pizza.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-borrar-pizza',
  templateUrl: './borrar-pizza.component.html',
  styleUrls: ['./borrar-pizza.component.css'],
})
export class BorrarPizzaComponent {
  @Input() pizzaSeleccionada!: Pizza;
  @Output() pizzaBorrada: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private pizzaService: PizzaService) {}
  async confirmarBorrarPizza() {
    const result = await Swal.fire({
      title: `¿Estás seguro de que deseas eliminar la pizza ${this.pizzaSeleccionada.nombre}?`,
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      const exitoBorrado = await this.pizzaService.borrarPizzaBD(
        this.pizzaSeleccionada.id
      );
      this.pizzaBorrada.emit(exitoBorrado);
    }
  }
}
