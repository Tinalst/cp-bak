import { Component, OnInit } from '@angular/core';
import {routerAnimation} from '../router-animations';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss'],
    animations: [routerAnimation]
})
export class Test1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
