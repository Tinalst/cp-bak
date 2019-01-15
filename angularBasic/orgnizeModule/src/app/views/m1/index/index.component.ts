import { Component, OnInit } from '@angular/core';
import {M1Service} from '../m1.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private m1Service: M1Service) { }

  ngOnInit() {
    console.log(this.m1Service.findAllNation());
  }

}
