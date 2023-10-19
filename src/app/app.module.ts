import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { LoginComponent } from './components/login/login.component';
import { AltaRepartidorComponent } from './components/alta-repartidor/alta-repartidor.component';
import { ListadoPaisesComponent } from './components/listado-paises/listado-paises.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalleRepartidorComponent } from './components/detalle-repartidor/detalle-repartidor.component';
import { SalenPizzasComponent } from './components/salen-pizzas/salen-pizzas.component';
import { ListadoRepartidorComponent } from './components/listado-repartidor/listado-repartidor.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DetallePaisRepartidorComponent } from './components/detalle-pais-repartidor/detalle-pais-repartidor.component';
import { ModificarPizzaComponent } from './components/modificar-pizza/modificar-pizza.component';
import { BorrarPizzaComponent } from './components/borrar-pizza/borrar-pizza.component';
import { ListarPizzasComponent } from './components/listar-pizzas/listar-pizzas.component';
import { AgregarPizzaComponent } from './components/agregar-pizza/agregar-pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    AltaRepartidorComponent,
    ListadoPaisesComponent,
    DetalleRepartidorComponent,
    SalenPizzasComponent,
    ListadoRepartidorComponent,
    InicioComponent,
    DetallePaisRepartidorComponent,
    ModificarPizzaComponent,
    BorrarPizzaComponent,
    ListarPizzasComponent,
    AgregarPizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule,  
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
