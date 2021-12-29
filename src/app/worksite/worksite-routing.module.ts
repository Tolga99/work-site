import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateWorksite } from './create-worksite';
import { Worksite } from './worksite';

const routes: Routes = [
  {
    path: '/worksite',
    component: Worksite,
  },
  {
    path: '/createworksite',
    component: CreateWorksite,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorksiteRoutingModule {}
