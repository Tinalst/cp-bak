import { Injectable } from '@angular/core';
import {User} from './User';

@Injectable({
  providedIn: 'root'
})
export class MyFormService {
  user: User = new User();
  constructor() { }
}
