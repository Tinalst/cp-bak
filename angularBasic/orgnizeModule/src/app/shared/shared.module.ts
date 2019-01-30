import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {FieldErrorDisplayComponent} from './components/field-error-display/field-error-display.component';
import {ToastComponent} from './components/toast/toast.component';
@NgModule({
  declarations: [
    FieldErrorDisplayComponent,
    ToastComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TranslateModule,
    FieldErrorDisplayComponent,
    ToastComponent
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
