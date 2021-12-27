import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePage } from '../profile/profile.page';
import { TabSettingsPage } from './tb-settings.page';

const routes: Routes = [
  {
    path: '/tb-settings',
    component: TabSettingsPage,
  },
  {
    path:'my-profile',
    component: ProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabSettingsPageRoutingModule {}
