import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {OverviewComponent} from './overview/overview.component';
import {TransactionsComponent} from './transactions/transactions.component';
import {CustomdatePipe} from './utils/pipe/customdate.pipe';
import {TxPipe} from './utils/pipe/tx.pipe';
import {Number3dotsPipe} from './utils/pipe/number3dots.pipe';
import {BtnComponent} from './btn/btn.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OverviewComponent,
    TransactionsComponent,
    BtnComponent,
    CustomdatePipe,
    TxPipe,
    Number3dotsPipe
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
