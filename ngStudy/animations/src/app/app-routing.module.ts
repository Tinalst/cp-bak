import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Animation1Component} from './animation1/animation1.component';
import {Animation2Component} from './animation2/animation2.component';
import {Animation3Component} from './animation3/animation3.component';
import {Animation4Component} from './animation4/animation4.component';
import {Animations5Component} from './animations5/animations5.component';
import {Animation6Component} from './animation6/animation6.component';
import {Animation7Component} from './animation7/animation7.component';
<<<<<<< HEAD
=======
import {Animation8Component} from './animation8/animation8.component';
import {Animation9Component} from './animation9/animation9.component';
import {Animation10Component} from './animation10/animation10.component';
import {Animation11Component} from './animation11/animation11.component';
>>>>>>> 781e55f6d4e110b21399c039fcd7f6bc5d854aa6

const routes: Routes = [
    {path: '', component: Animation1Component},
    {path: 'a1', component: Animation1Component},
    {path: 'a2', component: Animation2Component},
    {path: 'a3', component: Animation3Component},
    {path: 'a4', component: Animation4Component},
    {path: 'a5', component: Animations5Component},
    {path: 'a6', component: Animation6Component},
<<<<<<< HEAD
    {path: 'a7', component: Animation7Component}
=======
    {path: 'a7', component: Animation7Component},
    {path: 'a8', component: Animation8Component},
    {path: 'a9', component: Animation9Component},
    {path: 'a10', component: Animation10Component},
    {path: 'a11', component: Animation11Component}
>>>>>>> 781e55f6d4e110b21399c039fcd7f6bc5d854aa6
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
