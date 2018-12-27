import { NgModule } from '@angular/core';

import { M2RoutingModule } from './m2-routing.module';
import { IndexComponent } from './index/index.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    SharedModule,
    M2RoutingModule
  ],
})
export class M2Module { }
