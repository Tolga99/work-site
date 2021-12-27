import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabHomePage } from './tb-home.page';

const routes: Routes = [
  {
    path: '/tb-home',
    component: TabHomePage,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabHomePageRoutingModule {}
