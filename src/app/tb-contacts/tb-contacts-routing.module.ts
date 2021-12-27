import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabContactsClientPage } from '../tb-contacts-client/tb-contacts-client.page';
import { TabContactsPage } from './tb-contacts.page';

const routes: Routes = [
  {
    path: '/tb-contacts',
    component: TabContactsPage,
  },
  {
    path:'new-contact',
    component:TabContactsClientPage
  },
  {
    path:'edit-contact',
    //component:TabContactsClientPage
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabContactsPageRoutingModule {}
