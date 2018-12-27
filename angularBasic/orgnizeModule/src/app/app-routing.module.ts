import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'm1', pathMatch: 'full'},
  {path: 'm1', loadChildren: './views/m1/m1.module#M1Module'},
  {path: 'm2', loadChildren: './views/m2/m2.module#M2Module'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
