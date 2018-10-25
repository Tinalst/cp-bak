import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Animation1Component} from './animation1/animation1.component';

const routes: Routes = [
  {path: '', component: Animation1Component},
  {path: 'a1', component: Animation1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
