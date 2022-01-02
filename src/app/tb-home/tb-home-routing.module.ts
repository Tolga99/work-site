import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabHome } from './tb-home';

const routes: Routes = [
  {
    path: '',
    component: TabHome,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabHomeRoutingModule {}
