import {Component, OnInit} from '@angular/core';
import {ToastModel} from './ToastModel';
import {ToastService} from './toast.service';
import {ToastType} from './ToastType';
import {slideDownAnimation} from './slideDown-animation';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [slideDownAnimation]
})
export class ToastComponent implements OnInit {
  toasts: ToastModel[] = [];
  isShow = '';
  constructor(private toastService: ToastService) {
  }

  ngOnInit() {
    this.toastService.getToast().subscribe((toast: ToastModel) => {
      // console.log(toast);
      if(!toast) {
        this.toasts = [];
        return;
      }
      this.toasts.push(toast);
    })
    this.toastService.subject.subscribe((toast: ToastModel) => {
      // console.log(toast);
    })
  }

  removeAlter = (toast: ToastModel) => {
    this.toasts = this.toasts.filter(x => x !== toast);
  };

  cssClass = (toast: ToastModel) => {
    if (!toast){
      return;
    }
    switch (toast.type) {
      case ToastType.Success:
        // return 'toast toast-success show';
        this.isShow = 'show';
        return 'toast toast-success';
        break;
      case ToastType.Error:
        // return 'toast toast-error show';
        this.isShow = 'show';
        return 'toast toast-error';
        break;
      case ToastType.Info:
        // return 'toast toast-info show';
        this.isShow = 'show';
        return 'toast toast-info';
        break;
      case ToastType.Warning:
        // return 'toast toast-warning show';
        this.isShow = 'show';
        return 'toast toast-warning ';
    }
  }

}
