import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { FromEventComponent } from './from-event/from-event.component';
import { ScanComponent } from './scan/scan.component';
import { ObservableComponent } from './observable/observable.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SubscriptionMultiplyComponent } from './subscription-multiply/subscription-multiply.component';
import { SubjectObservabelComponent } from './subject-observabel/subject-observabel.component';
import { SubjectObserverComponent } from './subject-observer/subject-observer.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { OperatorComponent } from './operator/operator.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FromComponent } from './operators/from/from.component';

@NgModule({
        declarations: [
                AppComponent,
                FromEventComponent,
                ScanComponent,
                ObservableComponent,
                SubscriptionComponent,
                SubscriptionMultiplyComponent,
                SubjectObservabelComponent,
                SubjectObserverComponent,
                BehaviorSubjectComponent,
                OperatorComponent,
                HomeComponent,
                FromComponent
        ],
        imports: [
                BrowserModule,
                AppRoutingModule,
                RouterModule
        ],
        providers: [],
        bootstrap: [AppComponent]
})
export class AppModule {
}
