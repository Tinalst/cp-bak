import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateASceneComponent} from './create-ascene/create-ascene.component';
import {StarrySkyComponent} from './starry-sky/starry-sky.component';

const routes: Routes = [
  {path: '', component: CreateASceneComponent},
  {path: 'starrySky', component: StarrySkyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
