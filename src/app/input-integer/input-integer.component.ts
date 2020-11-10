import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Ball } from '../ball-list/Ball';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})

export class InputIntegerComponent implements OnInit {

  constructor() { }

  // Input para poder comunicarnos entre componentes. (Si lo borramos no funciona el ball que le pasamos al input-integer desde el ball-list)
  @Input()
  quantity: number;
  @Input()
  max: number;

  @Output()
  // Le tengo que decir el event emitter de que tipo es el objeto que voy a estar emitiendo. Generamos nuestro propio evento.
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  // Cuando llegue al tope de stock. 
  maxReached: EventEmitter<string> = new EventEmitter<string>();


// Input -> hace que funcionen los corchetes del html en nuestro two way data binding
// Output -> Como el Input pero con los parentesis.

  ngOnInit() {
  }

   // Funcion que sube/baja cantidad a comprar con parametro ball de tipo Ball.
   upQuantity() :void {
    if(this.quantity < this.max){
      this.quantity++;
      // Le pasamos su nuevo valor.
      this.quantityChange.emit(this.quantity);
    } else{
      this.maxReached.emit("Se alcanzó el máximo en stock");
    }
  }

  downQuantity() :void {
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeQuantity(event) :void {
    // event.target.value es el valor ingreasdo por el usuario en este caso en el evento del input.

    // Compruebo que no sea negativo y en caso de serlo lo vuelvo positivo.
    if(event.target.value < 0){
      event.target.value = event.target.value*(-1);
      this.quantity = event.target.value;
      this.quantityChange.emit(this.quantity);
      // otra opcion -> ball.quantity = 0;
    }

    // Compruebo que la cantidad ingresada no supere al stock
    if (event.target.value > this.max){
      this.quantity = this.max;
      this.quantityChange.emit(this.quantity);
      this.maxReached.emit("No hay más! Se agregó al carrito el máximo disponible en stock");
    }

    // Substraccion de ceros a la izquierda
      if(event.target.value){
      event.target.value = event.target.value - 0;
      
    }

  }

  // End
}
