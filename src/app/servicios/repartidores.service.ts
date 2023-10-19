import { Injectable } from '@angular/core';
import { Repartidor } from '../clases/repartidor';
import {
  Firestore,
  addDoc,
  collection,
  getDocs,
} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root',
})
export class RepartidoresService {
  constructor(private firestore: Firestore) {}

  public async guardarRepartidorBD(repartidor: Repartidor) {
    try {
      const repartidoresCollection = collection(this.firestore, 'repartidores');
      const repartidorData = {
        nombre: repartidor.nombre,
        apellido: repartidor.apellido,
        edad: repartidor.edad,
        pais: repartidor.pais,
        dni: repartidor.dni,
        capacidadTransporte: repartidor.capacidadTransporte,
        unidadPropia: repartidor.unidadPropia,
      };
      const docRef = await addDoc(repartidoresCollection, repartidorData);
      console.log('Repartidor agregado con ID: ', docRef.id);
      return true;
    } catch (error) {
      console.error('Error al agregar el repartidor: ', error);
      return false;
    }
  }
  public async traerRepartidoresBd() {
    const repartidoresCollection = collection(this.firestore, 'repartidores');
    const query = await getDocs(repartidoresCollection);
    const repartidores = query.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return repartidores;
  }
}
