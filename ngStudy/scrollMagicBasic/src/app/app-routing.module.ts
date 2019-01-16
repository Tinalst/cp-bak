import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SimpleTweenScrollComponent} from './simple-tween-scroll/simple-tween-scroll.component';

const routes: Routes = [
  {path: '', redirectTo: 'simple-tween-scroll', pathMatch: 'full'},
  {path: 'simple-tween-scroll', component: SimpleTweenScrollComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
