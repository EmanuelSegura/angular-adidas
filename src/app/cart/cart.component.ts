import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BallCartService } from '../ball-cart.service';
import { Ball } from '../ball-list/Ball';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartlist$: Observable<Ball[]>;

  // Definiendolo de esta manera. El servicio esta unificado en la misma instancia en todos lados.
  constructor(private cart: BallCartService) { 
    this.cartlist$ = cart.cartList.asObservable();
  }

  ngOnInit() {
  }

 

}
