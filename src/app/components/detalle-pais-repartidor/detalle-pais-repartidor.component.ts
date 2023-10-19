import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-pais-repartidor',
  templateUrl: './detalle-pais-repartidor.component.html',
  styleUrls: ['./detalle-pais-repartidor.component.css'],
})
export class DetallePaisRepartidorComponent {
  @Input() pais: any;
}
