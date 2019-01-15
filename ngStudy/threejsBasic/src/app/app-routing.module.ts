import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateASceneComponent} from './create-ascene/create-ascene.component';

const routes: Routes = [
  {path: '', component: CreateASceneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
