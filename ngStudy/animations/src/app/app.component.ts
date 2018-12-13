import { Component } from '@angular/core';
import { Router, RouterOutlet} from '@angular/router';
import {fadeAnimation} from './router-animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private router: Router) {

    }

    switchComponent = (comp): void => {
      this.router.navigate([`./${comp}`]);
    }

    prepareRoute(outlet: RouterOutlet) {
        // return outlet && outlet.activatedRouteData && outlet.activatedRouteData['state'];
    }

}
