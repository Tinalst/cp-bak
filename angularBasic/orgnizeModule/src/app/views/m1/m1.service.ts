import { Injectable } from '@angular/core';
import {HttpBaseService} from '../../shared/service/httpBase.service';
import {Common} from '../../utils/enum/api.enum';

@Injectable({
  providedIn: 'root'
})
export class M1Service{

  constructor(private httpBaseService: HttpBaseService) {
  }

  findAllNation = () => {
    return this.httpBaseService.post(Common.findAllNation, {});
  };

  sendEmail = () => {
    return this.httpBaseService.post(Common.senEmailCode, {}).subscribe(res => {
    });
  }
}
