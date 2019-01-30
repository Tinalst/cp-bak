import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {ToastModel} from './ToastModel';
import { Router} from '@angular/router';
import {ToastType} from './ToastType';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  // public subject = new Subject<ToastModel>();
  public subject = new BehaviorSubject(null);
  // private keepAfterRouterChange = false;

  constructor(private router: Router) {
    // 清除路由变化时候出现的弹出信息
    // if(event instanceof NavigationStart) {
    //   if(this.keepAfterRouterChange){
    //     this.keepAfterRouterChange = false;
    //   } else {
    //     this.clear();
    //   }
    // }
  }

  getToast = (toastId?: string): Observable<any> => {
    return this.subject.asObservable();
    // return this.subject.asObservable();
  };

  success(message: string) {
    this.toast(ToastType.Success, message);
  }

  error(message: string) {
    this.toast(ToastType.Error, message);
  }

  info(message: string) {
    this.toast(ToastType.Info, message);
  }

  warn(message: string) {
    this.toast(ToastType.Warning, message);
  }


  clear = () => {
    // 清除弹出框
    this.subject.next(null);
  };

  toast(type: ToastType, message: string) {
    // this.keepAfterRouterChange = keepAfterRouteChange;
    this.subject.next(<ToastModel>{ type: type, message: message });
  }

}
