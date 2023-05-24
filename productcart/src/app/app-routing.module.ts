import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddcartComponent } from './addcart/addcart.component'

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'add',component: AddcartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
