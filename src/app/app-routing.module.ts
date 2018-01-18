import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from './seattle/seattle.component';
import { VegasComponent } from './vegas/vegas.component';
import { AustinComponent } from './austin/austin.component';
import { NycComponent } from './nyc/nyc.component';

const routes: Routes = [
  {
    path:'seattle',
    pathMatch: 'full',
    component: SeattleComponent,
    children: []
  },
  {
    path:'',
    pathMatch: 'full',
    component: SeattleComponent,
    children: []
  },
  {
    path:'lasvegas',
    pathMatch: 'full',
    component: VegasComponent,
    children: []
  },
  {
    path:'austin',
    pathMatch: 'full',
    component: AustinComponent,
    children: []
  },
  {
    path:'nyc',
    pathMatch: 'full',
    component: NycComponent,
    children: []
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
