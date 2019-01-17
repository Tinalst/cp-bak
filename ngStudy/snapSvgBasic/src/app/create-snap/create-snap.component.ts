import {AfterViewInit, Component, OnInit} from '@angular/core';
declare let Snap: any;
@Component({
  selector: 'app-create-snap',
  templateUrl: './create-snap.component.html',
  styleUrls: ['./create-snap.component.scss']
})
export class CreateSnapComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const svg = Snap('#svg');
    svg.paper.path('M10 10L90 90').attr({
      stroke: '#000',
      strokeWidth: 5
    });
  }

}
