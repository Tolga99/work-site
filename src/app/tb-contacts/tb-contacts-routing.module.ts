import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabContactsClientPage } from '../tb-contacts-client/tb-contacts-client.page';
import { TabContactsPage } from './tb-contacts.page';

const routes: Routes = [
  {
    path: '',
    component: TabContactsPage,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabContactsPageRoutingModule {}
