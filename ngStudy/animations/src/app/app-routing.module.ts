import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Animation1Component} from './animation1/animation1.component';
import {Animation2Component} from './animation2/animation2.component';
import {Animation3Component} from './animation3/animation3.component';
import {Animation4Component} from './animation4/animation4.component';
import {Animations5Component} from './animations5/animations5.component';
import {Animation6Component} from './animation6/animation6.component';

const routes: Routes = [
    {path: '', component: Animation1Component},
    {path: 'a1', component: Animation1Component},
    {path: 'a2', component: Animation2Component},
    {path: 'a3', component: Animation3Component},
    {path: 'a4', component: Animation4Component},
    {path: 'a5', component: Animations5Component},
    {path: 'a6', component: Animation6Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
