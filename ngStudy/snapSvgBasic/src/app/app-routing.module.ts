import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateSnapComponent} from './create-snap/create-snap.component';

const routes: Routes = [
  {path: '', redirectTo: 'createSnap', pathMatch: 'full'},
  {path: 'createSnap', component:  CreateSnapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
