import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabContactsClient } from './tb-contacts-client';

const routes: Routes = [
  {
    path: '',
    component: TabContactsClient,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabContactsClientRoutingModule {}
