import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { FromEventComponent } from './from-event/from-event.component';
import { ScanComponent } from './scan/scan.component';
import { ObservableComponent } from './observable/observable.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SubscriptionMultiplyComponent } from './subscription-multiply/subscription-multiply.component';

@NgModule({
        declarations: [
                AppComponent,
                FromEventComponent,
                ScanComponent,
                ObservableComponent,
                SubscriptionComponent,
                SubscriptionMultiplyComponent
        ],
        imports: [
                BrowserModule,
                AppRoutingModule
        ],
        providers: [],
        bootstrap: [AppComponent]
})
export class AppModule {
}
