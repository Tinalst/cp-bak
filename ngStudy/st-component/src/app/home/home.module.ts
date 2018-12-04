import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [NavigationComponent, ContainerComponent, HomeComponent]
})
export class HomeModule { }
