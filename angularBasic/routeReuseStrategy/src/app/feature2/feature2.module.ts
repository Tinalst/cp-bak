import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { F2Component } from './f2/f2.component';

@NgModule({
  declarations: [F2Component],
  imports: [
    CommonModule
  ],
  exports: [
    F2Component
  ]
})
export class Feature2Module { }
