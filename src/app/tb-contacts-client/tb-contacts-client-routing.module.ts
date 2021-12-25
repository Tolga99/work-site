import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabContactsClientPage } from './tb-contacts-client.page';

const routes: Routes = [
  {
    path: '/tb-contacts-client',
    component: TabContactsClientPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabContactsClientPageRoutingModule {}
