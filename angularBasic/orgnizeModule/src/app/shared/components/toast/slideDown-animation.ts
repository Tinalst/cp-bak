import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

export const slideDownAnimation = trigger('slideDownAnimation', [
  state('show', style({
    opacity: '0',
    top: '-20px',
  })),

  transition('* => show', [
    animate('3s linear', keyframes([
      style({
        opacity: 0.2,
        top: '0px',
        offset: 0
      }),
      style({
        opacity: 1,
        top: '10px',
        offset: .1
      }),
      style({
        opacity: 1,
        top: '10px',
        offset: .9
      }),
      style({
        opacity: 0,
        top: '0px',
        offset: 1
      })

    ]))
  ]),
  // transition('* => hide', [
  //   style({
  //     opacity: 1
  //   }),
  //   animate('2s ease-in', style({
  //     opacity: 0
  //   }))
  // ])
]);
