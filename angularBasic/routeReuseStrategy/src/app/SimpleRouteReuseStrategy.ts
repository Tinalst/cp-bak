import {ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy} from '@angular/router';
import {ComponentRef} from '@angular/core';

export class SimpleRouteReuseStrategy implements RouteReuseStrategy {

  cacheRouters: any = []; // 用于存储路由历史快照
  // 4.
  // 获取路由缓存
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    console.debug('retrieve', route);
    // 从缓存中获取快照，若无则返回null
    if (!route.routeConfig || !this.cacheRouters[route.routeConfig.path]) return null;
    return this.cacheRouters[route.routeConfig.path];
  }
  // 3.
  // 是否允许路由还原
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    console.debug('shouldAttach', route);
    // 在缓存中有的都认为允许还原路由
    return !!route.routeConfig && !!this.cacheRouters[route.routeConfig.path];
  }
  // 5.
  // 允许路由复用
  // return true : 表示全局路由复用 可以单独配置
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    console.debug('shouldDetach', route);
    return true;
  }

  // 1.
  // 路由切换时候触发，当future.routeConfig === curr.routeConfig的时候触发路由复用
  // future: 要离开的路由 || curr: 当前路由
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    console.debug('shouldReuseRoute-future', future);
    console.debug('shouldReuseRoute-curr', curr);
    return false;
  }

  // 2.
  // 离开路由时会触发，用于存储离开的路由的状态
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    console.debug('store-future', route);
    console.debug('store-future', handle);
    // 按path作为key存储路由快照&组件当前实例对象
    // path等同于routerModule.forRoot()配置
    this.cacheRouters[route.routeConfig.path] = handle;
  }

  // 清除缓存
  clearCacheRouters() {
    for (const key in this.cacheRouters) {// 清除所有缓存 当然 你也可以自定义清除部分缓存
      this.cacheRouters[key] = null;
    }
  }

  private deactivateOutlet(handle: DetachedRouteHandle): void {
    let componentRef: ComponentRef<any> = handle ? handle['componentRef'] : null;
    if (componentRef) {
      componentRef.destroy();
    }
  }


}
