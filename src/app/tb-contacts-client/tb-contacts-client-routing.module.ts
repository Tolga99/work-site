import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabContactsPage } from '../tb-contacts/tb-contacts.page';
import { TabContactsClientPage } from './tb-contacts-client.page';

const routes: Routes = [
  {
    path: '',
    component: TabContactsClientPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabContactsClientPageRoutingModule {}
