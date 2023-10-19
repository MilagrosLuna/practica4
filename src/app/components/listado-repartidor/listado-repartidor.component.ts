import { Component } from '@angular/core';
import { PaisesService } from 'src/app/servicios/paises.service';
import { RepartidoresService } from 'src/app/servicios/repartidores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-repartidor',
  templateUrl: './listado-repartidor.component.html',
  styleUrls: ['./listado-repartidor.component.css'],
})
export class ListadoRepartidorComponent {
  repartidores: any[] = [];
  pais: any;
  repartidorSele: any = null;

  constructor(private repartidorService: RepartidoresService,
    private paisesService: PaisesService,) {}

  selectRepartidor(repartidor: any) {
    this.repartidorSele = repartidor;

    this.paisesService
      .getCountryByName(this.repartidorSele.pais)
      .subscribe((response: any) => {
        this.pais = response[0]; 
      });
  }

  async ngOnInit() {
    try {
      const RepartidoresData =
        await this.repartidorService.traerRepartidoresBd();
      this.repartidores = RepartidoresData;
      console.log(this.repartidores);

      Swal.fire({
        icon: 'success',
        title: 'Repartidores',
        text: 'Cargando Repartidores...',
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
}
