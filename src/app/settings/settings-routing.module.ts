import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Settings } from './settings';

const routes: Routes = [
  {
    path: '',
    component: Settings
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
