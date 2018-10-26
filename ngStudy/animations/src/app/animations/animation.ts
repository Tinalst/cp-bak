import {animate, animation, style} from '@angular/animations';

export const customAnimation = animation([
   style({
       height: '{{ height }}',
       opacity: '{{ opacity}}',
       background: '{{ backgroundColor}}'
   }),
   animate('{{ time }}')
]);
