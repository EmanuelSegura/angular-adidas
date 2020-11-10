import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BallListComponent } from './ball-list/ball-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import { FormsModule } from '@angular/forms';
import { AdidasAboutComponent } from './adidas-about/adidas-about.component';
import { AdidasBallsComponent } from './adidas-balls/adidas-balls.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';


@NgModule({
  declarations: [
    AppComponent,
    BallListComponent,
    ShoppingCartComponent,
    AdidasAboutComponent,
    AdidasBallsComponent,
    CartComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Esta importacion nos permite reaalizar el two way data binding para el input del stock. 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
