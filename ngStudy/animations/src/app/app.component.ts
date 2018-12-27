import {Component} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {fadeAnimation} from './customAimation/fadeAnimation';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [fadeAnimation]
})
export class AppComponent {

    constructor(private router: Router) {

    }

    switchComponent = (comp): void => {
        this.router.navigate([`./${comp}`]);
    };

    prepareRoute(outlet: RouterOutlet) {
        // return outlet && outlet.activatedRouteData && outlet.activatedRouteData['state'];
    }

    getRouterOutletState(outlet: RouterOutlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }

}
