import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import {CoreModule} from "./core/core.module";
import {ShareModule} from "./share/share.module";
import { ProductDetialComponent } from './product-detial/product-detial.component';
import { NullProductComponent } from './null-product/null-product.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SectionComponent,
        ProductDetialComponent,
        NullProductComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        ShareModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
