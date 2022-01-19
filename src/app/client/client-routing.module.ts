import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Client } from './client';

const routes: Routes = [
  {
    path: '',
    component: Client
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
