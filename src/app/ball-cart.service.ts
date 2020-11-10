import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ball } from './ball-list/Ball';

// Angular llama providers a todo lo que se puede inyectar (son proveedores de servicios). Usa el decorator @Injectable 
  // Maneja la logica del carrito 
@Injectable({
  providedIn: 'root'
})

// Un servicio es una clase. Puede ser como un model.

export class BallCartService {

  // Mi lista de compras 
  // Convertimos la variable que queremos observar en privada. Para poder usar el mismo nombre de esa variable observada con un BehaviorSubject
  private _cartList: Ball[] = [];
  cartList: BehaviorSubject<Ball[]> = new BehaviorSubject(this._cartList);

  constructor() { }


  addToCart(ball:Ball){
    // NO AGREGA 2 VECES LA MISMA PELOTA
    // Tengo este arreglo cart. Quiero comprobar si esa ball ya esta con una arrow function que compara cada valor con el que entra x parametro
    let item:Ball = this._cartList.find((valor)=> valor.name == ball.name);
    if (!item){
      // {... ball} <- clona el obj. y no habra problema paraa compartir la misma info. (El push es de la copia)
      this._cartList.push({... ball});
    }else{
      // Le sumo la cantidad que me trajo en la nueva vez que hice click en comprar
      item.quantity += ball.quantity;
    }

    console.log(this._cartList);

    // Actualiza la variable en el BehaviorSubject
    // Equivalente el emmit de eventos
    this.cartList.next(this._cartList);
  }


}
