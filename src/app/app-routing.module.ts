import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdidasAboutComponent } from './adidas-about/adidas-about.component';
import { AdidasBallsComponent } from './adidas-balls/adidas-balls.component';


const routes: Routes = [
  {path:'', redirectTo: 'balls', pathMatch:'full'},
  {path: 'balls', component: AdidasBallsComponent},
  {path:'about', component: AdidasAboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
