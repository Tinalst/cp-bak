import {animate, animateChild, group, query, state, style, transition, trigger} from '@angular/animations';

export const routerAnimation = trigger('routerAnimation', [
    state('void', style({
        position: 'fixed',
        width: '100%',
        height: '100%'
    })),
    state('*', style({
        position: 'fixed',
        width: '100%',
        height: '100%'
    })),
    transition('void => *', [
        style({ transform: 'translateY(100%)' }),
        animate('.5s ease-in-out', style({ transform: 'translateX(0)' }))
    ]),
    transition('* => void', [
        style({ transform: 'translateY(0%)' }),
        animate('.5s ease-in-out', style({ transform: 'translateX(100%)' }))
    ])
])
