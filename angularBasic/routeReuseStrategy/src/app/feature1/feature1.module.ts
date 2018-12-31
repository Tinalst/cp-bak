import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { F1Component } from './f1/f1.component';

@NgModule({
  declarations: [F1Component],
  imports: [
    CommonModule,
  ],
  exports: [
    F1Component
  ]
})
export class Feature1Module { }
