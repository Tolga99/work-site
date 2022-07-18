import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabHome } from './tb-home';

const routes: Routes = [
  {
    path: '',
    component: TabHome,
  },
  {
    path: 'worksite',
    loadChildren: () => import('../worksite/worksite.module').then(m => m.WorksiteModule)
  },
  {
    path: 'createworksite',
    loadChildren: () => import('../create-worksite/create-worksite.module').then(m => m.CreateWorksiteModule)
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabHomeRoutingModule {}
