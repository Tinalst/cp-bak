import { NgModule } from '@angular/core';

import { M1RoutingModule } from './m1-routing.module';
import { IndexComponent } from './index/index.component';
import {SharedModule} from '../../shared/shared.module';
import {CoreModule} from '../../core/core.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    SharedModule,
    M1RoutingModule
  ]
})
export class M1Module { }
