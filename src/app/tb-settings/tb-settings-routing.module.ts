import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabSettings } from './tb-settings';

const routes: Routes = [
  {
    path: '',
    component: TabSettings,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabSettingsRoutingModule {}
