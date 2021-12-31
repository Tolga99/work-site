import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hours } from './hours';

const routes: Routes = [
  {
    path: '',
    component: Hours
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoursRoutingModule {}
