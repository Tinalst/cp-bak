import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {FieldErrorDisplayComponent} from './components/field-error-display/field-error-display.component';

@NgModule({
  declarations: [
    FieldErrorDisplayComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TranslateModule,
    FieldErrorDisplayComponent
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
