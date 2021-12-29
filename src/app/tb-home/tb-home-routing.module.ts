import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateWorksite } from '../worksite/create-worksite';
import { Worksite } from '../worksite/worksite';
import { TabHomePage } from './tb-home.page';

const routes: Routes = [
  {
    path: '',
    component: TabHomePage,
  },
  {
    path: 'worksite',
    component: Worksite,
  },
  {
    path: 'createworksite',
    component: CreateWorksite,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabHomePageRoutingModule {}
