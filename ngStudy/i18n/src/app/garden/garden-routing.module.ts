import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GardenComponent} from './garden/garden.component';

const  routes: Routes = [
    {path: '', component: GardenComponent},
    {path: 'garden', component: GardenComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class GardenRoutingModule {}
