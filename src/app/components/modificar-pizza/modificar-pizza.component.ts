import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Pizza } from 'src/app/clases/pizza';
import { PizzaService } from 'src/app/servicios/pizza.service';

@Component({
  selector: 'app-modificar-pizza',
  templateUrl: './modificar-pizza.component.html',
  styleUrls: ['./modificar-pizza.component.css'],
})
export class ModificarPizzaComponent {
  @Input() pizzaSeleccionada!: Pizza;
  @Output() pizzaModificada: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  form!: FormGroup;
  checkError: boolean = false;
  errorMessage: string = '';

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      pizzaIngredientes: new FormControl('', [Validators.required]),
      pizzaPeso: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(99),
      ]),
      pizzaPrecio: new FormControl(1, [
        Validators.required,
        Validators.min(1),
        Validators.max(1000),
      ]),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const pizzaActualizada = new Pizza(
        this.pizzaSeleccionada.nombre,
        this.form.value.pizzaIngredientes,
        this.form.value.pizzaPrecio,
        this.form.value.pizzaPeso,
        this.pizzaSeleccionada.id
      );
      this.pizzaService
        .actualizarPizzaBD(pizzaActualizada)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Modificación de pizza exitosa',
            text: 'Pizza modificada',
            timer: 1500,
            showConfirmButton: false,
          });

          this.pizzaModificada.emit(true);
        })
        .catch((error) => {
          this.errorMessage = error.message;
          Swal.fire({
            icon: 'error',
            title: 'Error al modificar la pizza',
            text: this.errorMessage,
            timer: 4000,
          });
          
          this.pizzaModificada.emit(false);
        });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error, complete los datos correctamente',
        timer: 2500,
      });
    }
  }
}
