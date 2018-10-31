import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {
    @Input() btnName: string = '';
    @Input() btnWidth: string = 'auto';
    constructor() { }

    ngOnInit() {
    }

}
