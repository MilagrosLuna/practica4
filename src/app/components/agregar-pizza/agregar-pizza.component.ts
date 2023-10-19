import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pizza } from 'src/app/clases/pizza';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-pizza',
  templateUrl: './agregar-pizza.component.html',
  styleUrls: ['./agregar-pizza.component.css']
})
export class AgregarPizzaComponent {
  pizzaNombre: string = '';
  pizzaIngredientes: string = '';
  pizzaPeso: number = -1;
  pizzaPrecio: number = -1;

  form!: FormGroup;
  checkError: boolean = false;
  errorMessage: string = '';

  
  @Output() pizzaGenerada = new EventEmitter<any>();

  ngOnInit(): void {
    this.form = new FormGroup({
      pizzaNombre: new FormControl('', [Validators.required]),
      pizzaIngredientes: new FormControl('', [Validators.required]),
      pizzaPeso: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(99),
      ]),
      pizzaPrecio: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(1000),
      ]),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const pizza = new Pizza(
        this.form.value.pizzaNombre,
        this.form.value.pizzaIngredientes,
        this.form.value.pizzaPrecio,
        this.form.value.pizzaPeso
      );
      console.log(pizza);      
      this.pizzaGenerada.emit(pizza);
      this.form.reset();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error, complete los datos correctamente',
        timer: 2500,
      });
    }
  }
}
