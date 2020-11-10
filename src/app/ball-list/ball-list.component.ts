import { Component, OnInit } from '@angular/core';
import { BallCartService } from '../ball-cart.service';
// Importe la interface Ball para poder utilizarla aca.
import { Ball } from './Ball';

@Component({
  selector: 'app-ball-list',
  templateUrl: './ball-list.component.html',
  styleUrls: ['./ball-list.component.scss']
})
export class BallListComponent implements OnInit {

  balls: Ball[] = [
  {
    name: 'Adidas Finale',
    competition: 'Champions League',
    price: 120,  
    stock: 0,
    image: 'assets/img/adidas-champions.png',
    clearance: false, 
    quantity: 0,
  },
  {
    name: "Adidas Tango",
    competition: "Mundial 1978",
    price: 45,
    stock: 50,
    image: "assets/img/adidas-tango.png",
    clearance: true,
    quantity: 0,
  },
  {
    name: "Adidas MLS",
    competition: "MLS",
    price: 90,
    stock: 0,
    image: "assets/img/adidas-mls.png",
    clearance: false,
    quantity: 0,
  },
  {
    name: "Adidas Brazuca",
    competition: "Mundial 2014",
    price: 80,
    stock: 25,
    image: "assets/img/adidas-brasil2014.png",
    clearance: false,
    quantity: 0,
  }
]

  constructor(private cart: BallCartService) { }

  ngOnInit() {
  }

  addToCart(ball):void{

    this.cart.addToCart(ball);
    
    // Control de stock
    ball.stock -= ball.quantity;
    // Reiniciar a 0 para la siguiente compra
    ball.quantity = 0;
  }

  // alert con maximo de stock.
  maxReached(msj: string){
  alert(msj); 
  }

// End
}