import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OperatorComponent} from './operator/operator.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
        {path: '',  component: HomeComponent},
        {path: 'operator',  component: OperatorComponent}
];

@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
})
export class AppRoutingModule {
}
