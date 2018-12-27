import {NgModule, Optional, SkipSelf} from '@angular/core';
import {throwIfAlreadyLoaded} from './module-import-guard';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
  ],
  exports: [
    HeaderComponent
  ]
  // providers: [/* Services */]
})
/**
 * 特性模块——核心模块： 只在入口模块（AppModule中引入且只引入一次）
 * 原理： 通过阻拦模块的二次引入来阻拦模块里的组件服务的二次引用
 */
export class CoreModule {
  /**
   * 模块引入拦截，防止二次引入造成打包无法最优化
   * @param parentModule
   */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
