import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TweenMax} from 'gsap';
declare let ScrollMagic: any;
@Component({
  selector: 'app-simple-tween-scroll',
  templateUrl: './simple-tween-scroll.component.html',
  styleUrls: ['./simple-tween-scroll.component.scss']
})
export class SimpleTweenScrollComponent implements OnInit, AfterViewInit {
  @ViewChild('trigger1') trigger1: ElementRef;
  @ViewChild('orange') orange: ElementRef;
  @ViewChild('trigger2') trigger2: ElementRef;
  @ViewChild('pink') pink: ElementRef;
  @ViewChild('red') red: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // 创建控制器
    let controller = new ScrollMagic.Controller();

    // 创建场景
    let orangeScene = new ScrollMagic.Scene({
      triggerElement: this.trigger1.nativeElement
    })
    .setTween( TweenMax.to('.orange', 0.5, {backgroundColor: 'green', scale: 2.5})) /*requeire import plugin 4k*/
    .addTo(controller);

    // build scene multiple
    let pinkScene1 = new ScrollMagic.Scene({
      triggerElement: this.trigger2.nativeElement,
      triggerHook: 0.8  /*0-1触发scene的位置*/
    })
    .setTween('.pink', 0.5, {x: 200})
    .addTo(controller);

    let pinkScene2 = new ScrollMagic.Scene({
      triggerElement: this.trigger2.nativeElement
    })
    .setTween('.red', 0.5, {x: 200, delay: 0.5})
    .addTo(controller);
  }

}
