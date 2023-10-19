import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from '@angular/fire/firestore';
import { Pizza } from '../clases/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private firestore: Firestore) {}

  public async guardarPizzaBD(pizza: Pizza) {
    try {
      const pizzasCollection = collection(this.firestore, 'pizzas');
      const pizzaData = {
        nombre: pizza.nombre,
        ingredientes:pizza.ingredientes,
        precio:pizza.precio,
        peso:pizza.peso
      };
      const docRef = await addDoc(pizzasCollection, pizzaData);
      console.log('pizza agregado con ID: ', docRef.id);
      return true;
    } catch (error) {
      console.error('Error al agregar la pizza: ', error);
      return false;
    }
  }

  public async traerPizasBd(): Promise<Pizza[]> {
    const pizzasCollection = collection(this.firestore, 'pizzas');
    const query = await getDocs(pizzasCollection);
    const pizzas: Pizza[] = query.docs.map((doc) => {
      const data = doc.data();
      const pizza = new Pizza(data['nombre'], data['ingredientes'], data['precio'], data['peso']);
      pizza.id = doc.id;
      return pizza;
    });
    return pizzas;
  }

  public async actualizarPizzaBD(pizza: Pizza): Promise<boolean> {
    try {
      const pizzasCollection = collection(this.firestore, 'pizzas');
      const pizzaData = {
        nombre: pizza.nombre,
        ingredientes: pizza.ingredientes,
        precio: pizza.precio,
        peso: pizza.peso,
      };
  
      const pizzaId = pizza.id;
  
      await updateDoc(doc(pizzasCollection, pizzaId), pizzaData);
  
      console.log('Pizza actualizada con ID: ', pizzaId);
      return true;
    } catch (error) {
      console.error('Error al actualizar la pizza: ', error);
      return false;
    }
  }

  public async borrarPizzaBD(pizzaId: string): Promise<boolean> {
    try {
      const pizzasCollection = collection(this.firestore, 'pizzas');
  
      await deleteDoc(doc(pizzasCollection, pizzaId));
  
      console.log('Pizza eliminada con ID: ', pizzaId);
      return true;
    } catch (error) {
      console.error('Error al eliminar la pizza: ', error);
      return false;
    }
  }
  

}
