import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [

  ]
  /* No Providers Here! */
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [/* 共享模块中的组件使用到的服务*/]
    }
  }
}
