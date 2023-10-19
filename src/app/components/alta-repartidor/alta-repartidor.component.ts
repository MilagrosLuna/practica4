import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from 'src/app/servicios/paises.service';
import Swal from 'sweetalert2';
import { Repartidor } from 'src/app/clases/repartidor';
import { RepartidoresService } from 'src/app/servicios/repartidores.service';
@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.css'],
})
export class AltaRepartidorComponent {
  repartidorName: string = '';
  repartidorLastName: string = '';
  repartidorEdad: number = -1;
  selectedCountry: any = null;
  repartidordni: string = '';
  repartidorcapacidadTransporte: number = -1;
  repartidorunidadPropia: boolean = false;

  form!: FormGroup;
  checkError: boolean = false;
  errorMessage: string = '';
  constructor(
    private paisesService: PaisesService,
    private repartidorService: RepartidoresService
  ) {}

  ngOnInit(): void {
    this.paisesService.selectedCountry$.subscribe((country) => {
      this.selectedCountry = country;
    });
    this.form = new FormGroup({
      repartidorName: new FormControl('', [Validators.required]),
      repartidorLastName: new FormControl('', [Validators.required]),
      repartidorEdad: new FormControl('', [
        Validators.required,
        Validators.min(18),
        Validators.max(99),
      ]),
      selectedCountry: new FormControl(''),
      repartidordni: new FormControl('', [Validators.required]),
      repartidorcapacidadTransporte: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(20),
      ]),
      repartidorunidadPropia: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.form.valid && this.selectedCountry != null) {
      // Crea un objeto Repartidor con los datos del formulario
      const repartidor = new Repartidor(
        this.form.value.repartidorName,
        this.form.value.repartidorLastName,
        this.form.value.repartidorEdad,
        this.selectedCountry.name,
        this.form.value.repartidordni,
        this.form.value.repartidorcapacidadTransporte,
        this.form.value.repartidorunidadPropia
      );
        console.log(repartidor);
      this.repartidorService.guardarRepartidorBD(repartidor)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Alta de repartidor exitosa',
            text: 'Repartidor agregado',
            timer: 1500,
            showConfirmButton: false
          });
          this.form.reset(); // Limpia el formulario después de agregar el repartidor
        })
        .catch((error) => {
          this.errorMessage = error.message;
          Swal.fire({
            icon: 'error',
            title: 'Error al agregar el repartidor',
            text: this.errorMessage,
            timer: 4000
          });
        });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error, complete los datos correctamente',
        timer: 2500
      });
    }
  }
}
