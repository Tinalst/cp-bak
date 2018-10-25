import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GardenRoutingModule} from './garden-routing.module';
import { GardenComponent } from './garden/garden.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpLoaderFactory} from '../app.module';
import {HttpClient} from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        GardenRoutingModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    declarations: [GardenComponent]
})
export class GardenModule { }
