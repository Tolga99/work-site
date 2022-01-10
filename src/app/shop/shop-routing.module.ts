import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shop } from './shop';

const routes: Routes = [
  {
    path: '',
    component: Shop
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
