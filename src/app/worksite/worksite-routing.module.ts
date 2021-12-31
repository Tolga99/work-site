import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Worksite } from './worksite';

const routes: Routes = [
    {
    path: '',
    component: Worksite,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorksiteRoutingModule {}
