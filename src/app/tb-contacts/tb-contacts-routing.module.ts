import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabContacts } from './tb-contacts';

const routes: Routes = [
  {
    path: '',
    component: TabContacts,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabContactsRoutingModule {}
