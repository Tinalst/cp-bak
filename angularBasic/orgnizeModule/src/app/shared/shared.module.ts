import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    TranslateModule
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
