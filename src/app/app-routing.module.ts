import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { AltaRepartidorComponent } from './components/alta-repartidor/alta-repartidor.component';
import { activateGuard } from './guards/activate.guard';
import { InicioComponent } from './components/inicio/inicio.component';
import { DetalleRepartidorComponent } from './components/detalle-repartidor/detalle-repartidor.component';
import { ListadoRepartidorComponent } from './components/listado-repartidor/listado-repartidor.component';
import { SalenPizzasComponent } from './components/salen-pizzas/salen-pizzas.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'inicio',
    canActivate: [activateGuard],
    component: InicioComponent,
    children: [
      {
        path: 'altaRepartidor',
        component: AltaRepartidorComponent,
      },
      {
        path: 'detalleRepartidor',
        component: ListadoRepartidorComponent,
      },
      {
        path: 'bienvenido',
        component: BienvenidaComponent,
      },
      {
        path: 'salenPizzas',
        component: SalenPizzasComponent,
      },
    ],
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
