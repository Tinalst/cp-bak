import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.post('http://192.168.21.181:8090/fxKyc/common/findAllNation', {}, {

      withCredentials: true
    }).subscribe(res => {
      console.log(res);
    })
  }

}
